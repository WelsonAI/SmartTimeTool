import fs from "node:fs";

const [endpoint,targetUrl,outputPath,widthText,heightText,level = "d2",lang = "zh",mode = "",activity = ""] = process.argv.slice(2);
const width = Number(widthText || 390);
const height = Number(heightText || 900);
const targets = await fetch(`${endpoint}/json/list`).then(response => response.json());
const target = targets.find(item => item.type === "page");
if (!target) throw new Error("No Chrome page target found.");

const socket = new WebSocket(target.webSocketDebuggerUrl);
await new Promise((resolve,reject) => {
  socket.addEventListener("open",resolve,{ once:true });
  socket.addEventListener("error",reject,{ once:true });
});

let nextId = 0;
const pending = new Map();
socket.addEventListener("message",event => {
  const message = JSON.parse(event.data);
  if (!message.id || !pending.has(message.id)) return;
  const { resolve,reject } = pending.get(message.id);
  pending.delete(message.id);
  if (message.error) reject(new Error(message.error.message));
  else resolve(message.result);
});

function send(method,params = {}) {
  const id = ++nextId;
  socket.send(JSON.stringify({ id,method,params }));
  return new Promise((resolve,reject) => pending.set(id,{ resolve,reject }));
}

await send("Page.enable");
await send("Emulation.setDeviceMetricsOverride",{ width,height,deviceScaleFactor:1,mobile:width < 600 });
await send("Page.navigate",{ url:targetUrl });
await new Promise(resolve => setTimeout(resolve,700));
await send("Runtime.evaluate",{ expression:`(() => {
  const levelSelect=document.getElementById('levelSelect');
  levelSelect.value=${JSON.stringify(level)};
  levelSelect.dispatchEvent(new Event('change',{bubbles:true}));
  document.querySelector('[data-lang=${lang}]')?.click();
  ${mode ? `document.querySelector('[data-mode=${mode}]')?.click();` : ""}
  ${activity ? `const activitySelect=document.getElementById('activitySelect'); activitySelect.value=${JSON.stringify(activity)}; activitySelect.dispatchEvent(new Event('change',{bubbles:true}));` : ""}
})()` });
await new Promise(resolve => setTimeout(resolve,300));
const screenshot = await send("Page.captureScreenshot",{ format:"png",captureBeyondViewport:false,fromSurface:true });
fs.writeFileSync(outputPath,Buffer.from(screenshot.data,"base64"));
console.log(outputPath);
socket.close();
