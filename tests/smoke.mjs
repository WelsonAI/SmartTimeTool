const endpoint = process.argv[2] || "http://127.0.0.1:9333";
const targetUrl = process.argv[3] || "file:///C:/Users/User/Desktop/SmartTimeTool/index.html";

const targets = await fetch(`${endpoint}/json/list`).then(response => response.json());
const target = targets.find(item => item.type === "page");
if (!target) throw new Error("No Chrome page target found.");

const socket = new WebSocket(target.webSocketDebuggerUrl);
await new Promise((resolve,reject) => {
  socket.addEventListener("open",resolve,{ once:true });
  socket.addEventListener("error",reject,{ once:true });
});

let id = 0;
const pending = new Map();
const exceptions = [];
socket.addEventListener("message",event => {
  const message = JSON.parse(event.data);
  if (message.id && pending.has(message.id)) {
    const { resolve,reject } = pending.get(message.id);
    pending.delete(message.id);
    if (message.error) reject(new Error(message.error.message));
    else resolve(message.result);
  }
  if (message.method === "Runtime.exceptionThrown") exceptions.push(message.params.exceptionDetails.text);
});

function send(method,params = {}) {
  const callId = ++id;
  socket.send(JSON.stringify({ id: callId,method,params }));
  return new Promise((resolve,reject) => pending.set(callId,{ resolve,reject }));
}

async function evaluate(expression) {
  const result = await send("Runtime.evaluate",{ expression,awaitPromise:true,returnByValue:true });
  if (result.exceptionDetails) throw new Error(result.exceptionDetails.text);
  return result.result.value;
}

await send("Page.enable");
await send("Runtime.enable");
await send("Emulation.setDeviceMetricsOverride",{ width:390,height:844,deviceScaleFactor:1,mobile:true });
await send("Page.navigate",{ url:targetUrl });
await new Promise(resolve => setTimeout(resolve,800));

const initial = await evaluate(`(() => ({
  levels:[...document.querySelectorAll('#levelSelect option')].map(x=>x.value),
  visibleModes:[...document.querySelectorAll('.mode-tab')].filter(x=>!x.hidden).map(x=>x.dataset.mode),
  hasStage:!!document.querySelector('#conceptStage > *'),
  overflow:document.documentElement.scrollWidth - window.innerWidth
}))()`);

if (initial.levels.includes("d1")) throw new Error("Year 1 must not be present.");
if (initial.visibleModes.join(",") !== "clock,timeline,convert") throw new Error(`Unexpected Year 2 modes: ${initial.visibleModes}`);
if (!initial.hasStage) throw new Error("Initial visual did not render.");
if (initial.overflow > 1) throw new Error(`Mobile horizontal overflow: ${initial.overflow}px`);

const expectedModes = {
  d2:["clock","timeline","convert"],
  d3:["clock","timeline","calendar","convert"],
  d4:["clock","timeline","calendar","convert"],
  d5:["timeline","calendar","convert"],
  d6:["world"]
};

for (const [level,modes] of Object.entries(expectedModes)) {
  const result = await evaluate(`(async()=>{
    const select=document.getElementById('levelSelect');
    select.value=${JSON.stringify(level)};
    select.dispatchEvent(new Event('change',{bubbles:true}));
    await new Promise(r=>setTimeout(r,20));
    const visible=[...document.querySelectorAll('.mode-tab')].filter(x=>!x.hidden).map(x=>x.dataset.mode);
    const checks=[];
    for(const mode of visible){
      document.querySelector('[data-mode="'+mode+'"]').click();
      await new Promise(r=>setTimeout(r,10));
      const activities=[...document.querySelectorAll('#activitySelect option')].map(x=>x.value);
      for(const activity of activities){
        const activitySelect=document.getElementById('activitySelect');
        activitySelect.value=activity;
        activitySelect.dispatchEvent(new Event('change',{bubbles:true}));
        await new Promise(r=>setTimeout(r,10));
        checks.push({mode,activity,stage:!!document.querySelector('#conceptStage > *'),options:document.querySelectorAll('[data-answer]').length});
      }
    }
    return {visible,checks,overflow:document.documentElement.scrollWidth-window.innerWidth};
  })()`);
  if (result.visible.join(",") !== modes.join(",")) throw new Error(`${level} modes mismatch: ${result.visible}`);
  if (result.checks.some(check => !check.stage)) throw new Error(`${level} has an empty visual stage.`);
  if (result.checks.some(check => check.activity !== "set" && check.options < 2)) throw new Error(`${level} has missing answer options.`);
  if (result.overflow > 1) throw new Error(`${level} mobile overflow: ${result.overflow}px`);
}

const interaction = await evaluate(`(async()=>{
  const level=document.getElementById('levelSelect'); level.value='d2'; level.dispatchEvent(new Event('change',{bubbles:true}));
  document.querySelector('[data-mode="clock"]').click();
  const activity=document.getElementById('activitySelect'); activity.value='read'; activity.dispatchEvent(new Event('change',{bubbles:true}));
  for(const option of [...document.querySelectorAll('[data-answer]')]){
    option.click(); document.getElementById('checkBtn').click();
    if(document.getElementById('feedback').classList.contains('success')) break;
  }
  const success=document.getElementById('feedback').classList.contains('success');
  document.getElementById('teacherBtn').click();
  const modalOpen=!document.getElementById('teacherModal').hidden;
  document.getElementById('teacherCloseBtn').click();
  document.querySelector('[data-lang="zh"]').click();
  return {success,modalOpen,zh:document.documentElement.lang,overflow:document.documentElement.scrollWidth-window.innerWidth};
})()`);

if (!interaction.success) throw new Error("Answer checking did not reach a success state.");
if (!interaction.modalOpen) throw new Error("Teacher modal did not open.");
if (interaction.zh !== "zh-CN") throw new Error("Chinese language switch failed.");
if (interaction.overflow > 1) throw new Error(`Chinese mobile overflow: ${interaction.overflow}px`);

const conversionChecks = await evaluate(`(async()=>{
  const cases=[
    {level:'d2',activity:'basic',value:2,from:'hour',to:'minute',expected:'120'},
    {level:'d3',activity:'mixed',value:2,from:'year',to:'month',expected:'24'},
    {level:'d4',activity:'largeUnits',value:3,from:'century',to:'year',expected:'300'},
    {level:'d5',activity:'fractionDecimal',value:1.5,from:'year',to:'month',expected:'18'}
  ];
  const results=[];
  for(const item of cases){
    const level=document.getElementById('levelSelect'); level.value=item.level; level.dispatchEvent(new Event('change',{bubbles:true}));
    document.querySelector('[data-mode="convert"]').click();
    const activity=document.getElementById('activitySelect'); activity.value=item.activity; activity.dispatchEvent(new Event('change',{bubbles:true}));
    document.getElementById('teacherBtn').click();
    document.getElementById('teacherValue').value=item.value;
    document.getElementById('teacherFrom').value=item.from;
    document.getElementById('teacherTo').value=item.to;
    document.getElementById('teacherUseBtn').click();
    results.push({level:item.level,expected:item.expected,options:[...document.querySelectorAll('[data-answer]')].map(x=>x.textContent)});
  }
  return results;
})()`);

for (const item of conversionChecks) {
  if (!item.options.some(option => option.includes(item.expected))) throw new Error(`${item.level} conversion is missing ${item.expected}: ${item.options}`);
}

const yearTwoValidation = await evaluate(`(()=>{
  const level=document.getElementById('levelSelect'); level.value='d2'; level.dispatchEvent(new Event('change',{bubbles:true}));
  document.querySelector('[data-mode="clock"]').click();
  const activity=document.getElementById('activitySelect'); activity.value='read'; activity.dispatchEvent(new Event('change',{bubbles:true}));
  document.getElementById('teacherBtn').click();
  document.getElementById('teacherHour').value=7;
  document.getElementById('teacherMinute').value=7;
  document.getElementById('teacherUseBtn').click();
  const result={stillOpen:!document.getElementById('teacherModal').hidden,error:document.getElementById('teacherError').textContent};
  document.getElementById('teacherCloseBtn').click();
  return result;
})()`);
if (!yearTwoValidation.stillOpen || !yearTwoValidation.error) throw new Error("Year 2 accepted a non-five-minute teacher question.");
if (exceptions.length) throw new Error(`Runtime exceptions: ${exceptions.join(" | ")}`);

console.log(JSON.stringify({ ok:true,initial,interaction,conversionChecks,yearTwoValidation },null,2));
socket.close();
