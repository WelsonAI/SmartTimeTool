(() => {
  "use strict";

  const translations = {
    bm: {
      appTitle: "Jom Teroka Masa!", appSubtitle: "Lihat jam, bina garis masa dan fahami tempoh.",
      soundOn: "Bunyi: Buka", soundOff: "Bunyi: Tutup",
      modeClock: "Jam", modeTimeline: "Garis Masa", modeCalendar: "Kalendar", modeConvert: "Tukar Unit", modeWorld: "Zon Masa",
      chooseActivity: "Pilih aktiviti", level: "Tahap", levelD2: "Tahun 2", levelD3: "Tahun 3", levelD4: "Tahun 4", levelD5: "Tahun 5", levelD6: "Tahun 6", activity: "Aktiviti",
      teacherMode: "Soalan guru", customQuestion: "Bina soalan sendiri", newQuestion: "Cuba soalan lain", yourTask: "Mari cuba!",
      reset: "Mula semula", check: "Semak", next: "Soalan seterusnya", cancel: "Batal", useQuestion: "Guna soalan ini",
      activities: {
        read: "Baca jam", set: "Putar jarum", seconds: "Kenali saat", schedule: "Baca jadual waktu", system: "Sistem 12/24 jam",
        findEnd: "Cari waktu tamat", findStart: "Cari waktu mula", duration: "Cari tempoh", timeMath: "Kira tempoh",
        weekday: "Cari hari", countDays: "Kira hari", dateDuration: "Tempoh tarikh",
        basic: "Hubungan asas", mixed: "Tukar unit masa", largeUnits: "Unit masa besar", fractionDecimal: "Pecahan dan perpuluhan",
        localTime: "Cari waktu tempatan", difference: "Beza zon masa"
      },
      prompts: {
        clock: "Perhatikan jarum jam dan jarum minit.", timeline: "Ikut pergerakan masa dari mula hingga tamat.",
        calendar: "Gunakan susunan hari dalam kalendar.", convert: "Gunakan hubungan antara unit masa.", world: "Bandingkan waktu di dua zon masa."
      },
      howTo: {
        clock: "Jarum pendek menunjukkan jam. Jarum panjang menunjukkan minit.", timeline: "Mulakan pada waktu yang diberi dan bergerak mengikut tempoh.",
        calendar: "Kira satu petak untuk setiap hari dan perhatikan pertukaran minggu.", convert: "Ingat hubungan unit dahulu, kemudian pilih jawapan.",
        world: "Gerak ke timur menambah waktu; gerak ke barat mengurangkan waktu."
      },
      notes: {
        d2: "Buku teks: minit dalam gandaan 5, 1 jam = 60 minit, 1 hari = 24 jam.",
        d3: "Buku teks: saat, jadual, kalendar dan operasi unit masa.",
        d4: "Buku teks: sistem 12 jam dan 24 jam serta tempoh masa.",
        d5: "Buku teks: tempoh merentas tarikh dan penukaran pecahan/perpuluhan masa.",
        d6: "Buku teks: zon masa dunia, beza waktu dan perubahan tarikh."
      },
      questions: {
        read: "Pukul berapakah ini?", set: "Putarkan jarum kepada waktu ini.", seconds: "Berapa saat ditunjukkan oleh jarum saat?", schedule: "Aktiviti manakah berlaku pada waktu ini?",
        system: "Pilih waktu yang sama.", findEnd: "Pukul berapakah aktiviti tamat?", findStart: "Pukul berapakah aktiviti bermula?",
        duration: "Berapakah tempoh antara dua waktu?", timeMath: "Berapakah jumlah tempoh?", weekday: "Hari apakah tarikh ini?",
        countDays: "Apakah tarikhnya selepas tempoh ini?", dateDuration: "Berapakah tempoh antara dua tarikh?",
        convert: "Tukarkan unit masa ini.", localTime: "Apakah waktu di bandar sasaran?", difference: "Berapakah beza waktu?"
      },
      labels: { start: "Mula", end: "Tamat", unknown: "Cari", later: "kemudian", earlier: "lebih awal", date: "Tarikh", base: "Diberi", target: "Cari", hours: "jam", minutes: "minit", seconds: "saat", days: "hari", weeks: "minggu", months: "bulan", years: "tahun", decades: "dekad", centuries: "abad", millennia: "alaf" },
      periods: { am: "pagi", pm: "petang/malam" },
      weekdays: ["Ahad","Isnin","Selasa","Rabu","Khamis","Jumaat","Sabtu"],
      months: ["Januari","Februari","Mac","April","Mei","Jun","Julai","Ogos","September","Oktober","November","Disember"],
      events: ["Bersarapan","Masuk kelas","Bersenam","Membaca"],
      teacherIntro: "Masukkan nilai mengikut skop buku teks bagi tahun ini.", hour: "Jam", minute: "Minit", period: "Waktu", duration: "Tempoh (minit)", day: "Tarikh", offsetDays: "Bilangan hari", value: "Nilai", fromUnit: "Daripada unit", toUnit: "Kepada unit", baseCity: "Bandar diberi", targetCity: "Bandar sasaran",
      chooseFirst: "Pilih satu jawapan dahulu.", enterFirst: "Masukkan jawapan dahulu.", correct: "Betul!", wrong: "Belum tepat. Perhatikan visual sekali lagi.",
      exactMinute: "Tahun 2 menggunakan gandaan 5 minit.", invalid: "Masukkan nilai yang sah mengikut had aktiviti ini.", different: "Pilih dua unit atau bandar yang berlainan.",
      ready: "Perhatikan visual, kemudian pilih jawapan.", readySet: "Gunakan butang untuk menggerakkan jarum.",
      steps: ["Perhatikan masa", "Cuba jawapan", "Semak dan faham"],
      cities: { london: "London", riyadh: "Riyadh", delhi: "New Delhi", kuala: "Kuala Lumpur", tokyo: "Tokyo", perth: "Perth" }
    },
    zh: {
      appTitle: "一起来探索时间！", appSubtitle: "看钟面、走时间轴，真正理解时刻与时长。",
      soundOn: "声音：开", soundOff: "声音：关",
      modeClock: "钟面", modeTimeline: "时间轴", modeCalendar: "日历", modeConvert: "单位换算", modeWorld: "时区",
      chooseActivity: "选择活动", level: "年级", levelD2: "二年级", levelD3: "三年级", levelD4: "四年级", levelD5: "五年级", levelD6: "六年级", activity: "活动",
      teacherMode: "老师出题", customQuestion: "自订题目", newQuestion: "换一道题", yourTask: "试试看！",
      reset: "重新开始", check: "检查", next: "下一题", cancel: "取消", useQuestion: "使用这道题",
      activities: {
        read: "读时刻", set: "拨时钟", seconds: "认识秒", schedule: "读时间表", system: "12/24 时计时法",
        findEnd: "找结束时刻", findStart: "找开始时刻", duration: "找相隔时间", timeMath: "时间计算",
        weekday: "找星期", countDays: "数日子", dateDuration: "日期间隔",
        basic: "基本关系", mixed: "时间单位换算", largeUnits: "较大时间单位", fractionDecimal: "分数与小数时间",
        localTime: "找当地时刻", difference: "时区差"
      },
      prompts: {
        clock: "观察时针和分针。", timeline: "沿着时间轴，从开始走到结束。", calendar: "根据日历里日期的排列来推算。",
        convert: "运用时间单位之间的关系。", world: "比较两个时区的时刻。"
      },
      howTo: {
        clock: "短针是时针，长针是分针。", timeline: "从已知时刻开始，按照时长向前或向后移动。",
        calendar: "每一格代表一天，也要留意跨星期的位置。", convert: "先想起单位关系，再选择答案。",
        world: "往东时刻增加，往西时刻减少。"
      },
      notes: {
        d2: "课本范围：5 分钟的倍数、1 小时 = 60 分钟、1 天 = 24 小时。",
        d3: "课本范围：秒、时间表、日历和时间单位的运算。",
        d4: "课本范围：12 时与 24 时计时法、相隔时间。",
        d5: "课本范围：跨日期的时长、分数和小数时间换算。",
        d6: "课本范围：世界时区、时差和日期变化。"
      },
      questions: {
        read: "这个钟面显示什么时刻？", set: "把指针拨到这个时刻。", seconds: "秒针表示多少秒？", schedule: "这个时刻进行什么活动？", system: "选择相同的时刻。",
        findEnd: "活动在什么时刻结束？", findStart: "活动在什么时刻开始？", duration: "两个时刻相隔多久？", timeMath: "总时间是多少？",
        weekday: "这个日期是星期几？", countDays: "经过这些天后是什么日期？", dateDuration: "两个日期相隔多久？", convert: "换算这个时间单位。",
        localTime: "目标城市是什么时刻？", difference: "两个城市相差多少时间？"
      },
      labels: { start: "开始", end: "结束", unknown: "求", later: "之后", earlier: "之前", date: "日期", base: "已知", target: "求", hours: "小时", minutes: "分钟", seconds: "秒", days: "天", weeks: "个星期", months: "个月", years: "年", decades: "个年代", centuries: "个世纪", millennia: "个千禧年" },
      periods: { am: "上午", pm: "下午/晚上" },
      weekdays: ["星期日","星期一","星期二","星期三","星期四","星期五","星期六"],
      months: ["一月","二月","三月","四月","五月","六月","七月","八月","九月","十月","十一月","十二月"],
      events: ["吃早餐","上课","运动","阅读"],
      teacherIntro: "请按照这个年级课本的范围输入数值。", hour: "时", minute: "分", period: "时段", duration: "时长（分钟）", day: "日期", offsetDays: "天数", value: "数值", fromUnit: "原来的单位", toUnit: "换成的单位", baseCity: "已知城市", targetCity: "目标城市",
      chooseFirst: "请先选择一个答案。", enterFirst: "请先输入答案。", correct: "答对了！", wrong: "还不正确，请再观察图示。",
      exactMinute: "二年级课本使用 5 分钟的倍数。", invalid: "请输入符合这个活动范围的数值。", different: "请选择不同的两个单位或城市。",
      ready: "观察图示后选择答案。", readySet: "使用按钮移动指针。",
      steps: ["观察时间", "尝试作答", "检查并理解"],
      cities: { london: "伦敦", riyadh: "利雅得", delhi: "新德里", kuala: "吉隆坡", tokyo: "东京", perth: "珀斯" }
    },
    en: {
      appTitle: "Let's Explore Time!", appSubtitle: "Read clocks, follow timelines and understand duration.",
      soundOn: "Sound: On", soundOff: "Sound: Off",
      modeClock: "Clock", modeTimeline: "Timeline", modeCalendar: "Calendar", modeConvert: "Convert Units", modeWorld: "Time Zones",
      chooseActivity: "Choose an activity", level: "Level", levelD2: "Year 2", levelD3: "Year 3", levelD4: "Year 4", levelD5: "Year 5", levelD6: "Year 6", activity: "Activity",
      teacherMode: "Teacher question", customQuestion: "Make your own question", newQuestion: "Try another question", yourTask: "Let's try!",
      reset: "Start again", check: "Check", next: "Next question", cancel: "Cancel", useQuestion: "Use this question",
      activities: {
        read: "Read the clock", set: "Set the clock", seconds: "Explore seconds", schedule: "Read a timetable", system: "12/24-hour time",
        findEnd: "Find the end time", findStart: "Find the start time", duration: "Find the duration", timeMath: "Calculate time",
        weekday: "Find the weekday", countDays: "Count days", dateDuration: "Date duration",
        basic: "Basic relationships", mixed: "Convert time units", largeUnits: "Larger time units", fractionDecimal: "Fractions and decimals",
        localTime: "Find local time", difference: "Time-zone difference"
      },
      prompts: { clock: "Observe the hour and minute hands.", timeline: "Follow time from the start to the end.", calendar: "Use the arrangement of dates in the calendar.", convert: "Use the relationships between time units.", world: "Compare times in two time zones." },
      howTo: { clock: "The short hand shows the hour. The long hand shows the minutes.", timeline: "Start at the given time and move by the stated duration.", calendar: "Count one square for each day and notice when the week changes.", convert: "Recall the unit relationship before choosing an answer.", world: "Moving east adds time; moving west subtracts time." },
      notes: {
        d2: "Textbook scope: 5-minute multiples, 1 hour = 60 minutes, 1 day = 24 hours.",
        d3: "Textbook scope: seconds, schedules, calendars and operations with time units.",
        d4: "Textbook scope: 12/24-hour time and duration.",
        d5: "Textbook scope: duration across dates and fractional/decimal time conversions.",
        d6: "Textbook scope: world time zones, time differences and date changes."
      },
      questions: { read: "What time does the clock show?", set: "Set the hands to this time.", seconds: "How many seconds does the second hand show?", schedule: "Which activity happens at this time?", system: "Choose the same time.", findEnd: "What time does the activity end?", findStart: "What time does the activity start?", duration: "How long is it between the two times?", timeMath: "What is the total duration?", weekday: "What weekday is this date?", countDays: "What is the date after this many days?", dateDuration: "How many days are between these dates?", convert: "Convert this time unit.", localTime: "What is the time in the target city?", difference: "What is the time difference?" },
      labels: { start: "Start", end: "End", unknown: "Find", later: "later", earlier: "earlier", date: "Date", base: "Given", target: "Find", hours: "hours", minutes: "minutes", seconds: "seconds", days: "days", weeks: "weeks", months: "months", years: "years", decades: "decades", centuries: "centuries", millennia: "millennia" },
      periods: { am: "a.m.", pm: "p.m." },
      weekdays: ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],
      months: ["January","February","March","April","May","June","July","August","September","October","November","December"],
      events: ["Breakfast","Class","Exercise","Reading"],
      teacherIntro: "Enter values within this year's textbook scope.", hour: "Hour", minute: "Minute", period: "Period", duration: "Duration (minutes)", day: "Date", offsetDays: "Number of days", value: "Value", fromUnit: "From unit", toUnit: "To unit", baseCity: "Given city", targetCity: "Target city",
      chooseFirst: "Choose an answer first.", enterFirst: "Enter an answer first.", correct: "Correct!", wrong: "Not yet. Observe the visual again.",
      exactMinute: "Year 2 uses multiples of 5 minutes.", invalid: "Enter values within the range for this activity.", different: "Choose two different units or cities.",
      ready: "Observe the visual, then choose an answer.", readySet: "Use the buttons to move the hands.",
      steps: ["Observe the time", "Try an answer", "Check and understand"],
      cities: { london: "London", riyadh: "Riyadh", delhi: "New Delhi", kuala: "Kuala Lumpur", tokyo: "Tokyo", perth: "Perth" }
    }
  };

  const curriculum = {
    d2: { modes: ["clock","timeline","convert"], activities: { clock: ["read","set"], timeline: ["findEnd","findStart"], convert: ["basic"] } },
    d3: { modes: ["clock","timeline","calendar","convert"], activities: { clock: ["read","seconds","schedule"], timeline: ["duration","timeMath"], calendar: ["weekday","countDays"], convert: ["mixed"] } },
    d4: { modes: ["clock","timeline","calendar","convert"], activities: { clock: ["system"], timeline: ["duration","timeMath"], calendar: ["countDays"], convert: ["largeUnits","mixed"] } },
    d5: { modes: ["timeline","calendar","convert"], activities: { timeline: ["dateDuration","timeMath"], calendar: ["dateDuration"], convert: ["fractionDecimal"] } },
    d6: { modes: ["world"], activities: { world: ["localTime","difference"] } }
  };

  const unitLabelKey = { second: "seconds", minute: "minutes", hour: "hours", day: "days", week: "weeks", month: "months", year: "years", decade: "decades", century: "centuries", millennium: "millennia" };
  const directConversions = {
    "minute:second": 60, "hour:minute": 60, "day:hour": 24, "week:day": 7, "year:month": 12,
    "decade:year": 10, "century:year": 100, "millennium:year": 1000, "century:decade": 10
  };
  const cities = {
    london: { offset: 0, emoji: "🎡" }, riyadh: { offset: 3, emoji: "🕌" }, delhi: { offset: 5.5, emoji: "🛕" },
    kuala: { offset: 8, emoji: "🏙️" }, perth: { offset: 8, emoji: "🦘" }, tokyo: { offset: 9, emoji: "🗼" }
  };

  const state = {
    lang: "bm", sound: true, level: "d2", mode: "clock", activity: "read", question: null,
    selected: null, wrongSelection: null, solved: false, custom: false, clockInput: 0
  };

  const els = Object.fromEntries([
    "modeTabs","levelSelect","activitySelect","curriculumNote","howToText","modeTitle","soundToggle","promptText","levelBadge",
    "challengeDisplay","conceptStage","answerZone","feedback","resetBtn","checkBtn","newQuestionBtn","celebrationLayer",
    "teacherModal","teacherBtn","teacherCloseBtn","teacherCancelBtn","teacherUseBtn","teacherIntro","teacherFields","teacherError"
  ].map(id => [id, document.getElementById(id)]));
  const stepTexts = [document.getElementById("stepOne"),document.getElementById("stepTwo"),document.getElementById("stepThree")];
  let audioContext = null;

  const t = () => translations[state.lang];
  const year = () => Number(state.level.slice(1));
  const randomInt = (min,max) => Math.floor(Math.random() * (max - min + 1)) + min;
  const randomItem = items => items[randomInt(0,items.length - 1)];
  const pad = n => String(n).padStart(2,"0");
  const shuffle = items => {
    const result = [...items];
    for (let i = result.length - 1; i > 0; i -= 1) {
      const j = Math.floor(Math.random() * (i + 1));
      [result[i],result[j]] = [result[j],result[i]];
    }
    return result;
  };
  const uniqueOptions = (answer,candidates) => shuffle([...new Set([answer,...candidates])]).slice(0,4);
  const periodLabel = (period,hour) => {
    if (state.lang === "en") return period === "am" ? (hour === 12 ? "midnight" : "a.m.") : (hour === 12 ? "noon" : "p.m.");
    if (state.lang === "zh") {
      if (hour === 12) return period === "am" ? "午夜" : "正午";
      if (period === "am") return "上午";
      return hour >= 7 ? "晚上" : "下午";
    }
    if (hour === 12) return period === "am" ? "tengah malam" : "tengah hari";
    if (period === "am") return "pagi";
    return hour >= 7 ? "malam" : "petang";
  };
  const format12 = (hour,minute,period = "am",withPeriod = false) => `${hour}:${pad(minute)}${withPeriod ? ` ${periodLabel(period,hour)}` : ""}`;
  const format24 = totalMinutes => `${pad(Math.floor(((totalMinutes % 1440) + 1440) % 1440 / 60))}${pad(((totalMinutes % 60) + 60) % 60)}`;
  const formatClock24 = totalMinutes => `${pad(Math.floor(((totalMinutes % 1440) + 1440) % 1440 / 60))}:${pad(((totalMinutes % 60) + 60) % 60)}`;
  const formatSystem24 = totalMinutes => state.lang === "zh" ? `${format24(totalMinutes)} 时` : state.lang === "bm" ? `Jam ${format24(totalMinutes)}` : `${format24(totalMinutes)} hours`;
  const to12 = totalMinutes => {
    const normalized = ((totalMinutes % 1440) + 1440) % 1440;
    const h24 = Math.floor(normalized / 60);
    return { hour: h24 % 12 || 12, minute: normalized % 60, period: h24 < 12 ? "am" : "pm" };
  };
  const displayTime = totalMinutes => {
    if (year() >= 4) return formatClock24(totalMinutes);
    const time = to12(totalMinutes);
    return format12(time.hour,time.minute,time.period,true);
  };
  const dateAt = (yearValue,month,day) => new Date(Date.UTC(yearValue,month,day));
  const addDays = (date,days) => new Date(date.getTime() + days * 86400000);
  const formatDate = date => state.lang === "zh" ? `${date.getUTCFullYear()}年${date.getUTCMonth()+1}月${date.getUTCDate()}日` : `${date.getUTCDate()} ${t().months[date.getUTCMonth()]} ${date.getUTCFullYear()}`;
  const unitName = unit => t().labels[unitLabelKey[unit]];
  const conversionFactor = (from,to) => {
    if (directConversions[`${from}:${to}`] != null) return directConversions[`${from}:${to}`];
    if (directConversions[`${to}:${from}`] != null) return 1 / directConversions[`${to}:${from}`];
    return NaN;
  };
  const cleanNumber = value => Number(Number(value).toFixed(6));

  function playTone(kind = "click") {
    if (!state.sound) return;
    try {
      audioContext ??= new (window.AudioContext || window.webkitAudioContext)();
      const now = audioContext.currentTime;
      const notes = kind === "success" ? [523,659,784] : kind === "wrong" ? [220,175] : [420];
      notes.forEach((frequency,index) => {
        const oscillator = audioContext.createOscillator();
        const gain = audioContext.createGain();
        oscillator.type = kind === "wrong" ? "triangle" : "sine";
        oscillator.frequency.value = frequency;
        gain.gain.setValueAtTime(.0001,now + index * .09);
        gain.gain.exponentialRampToValueAtTime(.12,now + index * .09 + .015);
        gain.gain.exponentialRampToValueAtTime(.0001,now + index * .09 + .14);
        oscillator.connect(gain).connect(audioContext.destination);
        oscillator.start(now + index * .09);
        oscillator.stop(now + index * .09 + .16);
      });
    } catch (_) { /* Sound is optional when the browser blocks Web Audio. */ }
  }

  function syncCurriculum() {
    const config = curriculum[state.level];
    if (!config.modes.includes(state.mode)) state.mode = config.modes[0];
    const allowedActivities = config.activities[state.mode];
    if (!allowedActivities.includes(state.activity)) state.activity = allowedActivities[0];
  }

  function updateControls() {
    syncCurriculum();
    document.documentElement.lang = state.lang === "zh" ? "zh-CN" : state.lang;
    document.querySelectorAll("[data-i18n]").forEach(node => {
      const value = t()[node.dataset.i18n];
      if (typeof value === "string") node.textContent = value;
    });
    document.querySelectorAll(".language-btn").forEach(btn => {
      const active = btn.dataset.lang === state.lang;
      btn.classList.toggle("active",active);
      btn.setAttribute("aria-pressed",String(active));
    });
    document.querySelectorAll(".mode-tab").forEach(btn => {
      const available = curriculum[state.level].modes.includes(btn.dataset.mode);
      btn.hidden = !available;
      const active = btn.dataset.mode === state.mode;
      btn.classList.toggle("active",active);
      btn.setAttribute("aria-pressed",String(active));
    });
    els.levelSelect.value = state.level;
    const activityOptions = curriculum[state.level].activities[state.mode];
    els.activitySelect.replaceChildren(...activityOptions.map(code => {
      const option = document.createElement("option");
      option.value = code;
      option.textContent = t().activities[code];
      return option;
    }));
    els.activitySelect.value = state.activity;
    els.modeTitle.textContent = t()[`mode${state.mode[0].toUpperCase()}${state.mode.slice(1)}`];
    els.curriculumNote.textContent = t().notes[state.level];
    els.howToText.textContent = t().howTo[state.mode];
    els.soundToggle.setAttribute("aria-pressed",String(state.sound));
    els.soundToggle.querySelector("span:last-child").textContent = state.sound ? t().soundOn : t().soundOff;
    stepTexts.forEach((node,index) => { node.textContent = t().steps[index]; });
  }

  function setQuestion(question,custom = false) {
    state.question = question;
    state.selected = null;
    state.wrongSelection = null;
    state.solved = false;
    state.custom = custom;
    state.clockInput = question.type === "clockSet" ? 0 : state.clockInput;
    els.celebrationLayer.replaceChildren();
    render();
  }

  function generateQuestion() {
    syncCurriculum();
    let question;
    if (state.mode === "clock") question = makeClockQuestion();
    else if (state.mode === "timeline") question = makeTimelineQuestion();
    else if (state.mode === "calendar") question = makeCalendarQuestion();
    else if (state.mode === "convert") question = makeConvertQuestion();
    else question = makeWorldQuestion();
    setQuestion(question);
  }

  function makeClockQuestion(custom = null) {
    if (state.activity === "seconds") {
      const second = custom?.second ?? randomInt(1,11) * 5;
      const answer = `${second} ${t().labels.seconds}`;
      return { type: "clockSecond", prompt: t().questions.seconds, second, answer,
        options: uniqueOptions(answer,[(second+5)%60,Math.max(0,second-5),(second+15)%60].map(value => `${value} ${t().labels.seconds}`)) };
    }
    if (state.activity === "system") {
      const hour24 = custom?.hour24 ?? randomInt(0,23);
      const minute = custom?.minute ?? randomInt(0,11) * 5;
      const total = hour24 * 60 + minute;
      const twelve = to12(total);
      const ask24 = custom?.ask24 ?? Math.random() < .5;
      const answer = ask24 ? formatSystem24(total) : format12(twelve.hour,twelve.minute,twelve.period,true);
      const candidates = ask24
        ? [total + 60,total + 12 * 60,total - 60].map(v => formatSystem24(v))
        : [total + 60,total + 12 * 60,total - 60].map(v => { const x = to12(v); return format12(x.hour,x.minute,x.period,true); });
      return { type: "system", prompt: t().questions.system, source: ask24 ? format12(twelve.hour,twelve.minute,twelve.period,true) : formatSystem24(total), answer, options: uniqueOptions(answer,candidates), total };
    }

    if (state.activity === "schedule") {
      const baseHour = custom?.hour ?? randomInt(7,9);
      const minute = custom?.minute ?? randomInt(0,11) * 5;
      const eventIndex = custom?.eventIndex ?? randomInt(0,3);
      const times = [0,30,60,90].map(delta => baseHour * 60 + minute + delta);
      return { type: "schedule", prompt: t().questions.schedule, times, eventIndex, answer: String(eventIndex), options: shuffle(["0","1","2","3"]) };
    }

    const minuteStep = year() === 2 ? 5 : 1;
    const hour = custom?.hour ?? randomInt(1,12);
    const minute = custom?.minute ?? randomInt(0,Math.floor(59 / minuteStep)) * minuteStep;
    const period = custom?.period ?? randomItem(["am","pm"]);
    if (state.activity === "set") return { type: "clockSet", prompt: t().questions.set, hour, minute, period, answer: hour * 60 + minute };
    const answer = format12(hour,minute,period,false);
    const candidates = [minute + minuteStep,minute - minuteStep,minute + 10].map((m,index) => {
      let h = hour;
      while (m < 0) { m += 60; h = h === 1 ? 12 : h - 1; }
      while (m >= 60) { m -= 60; h = h === 12 ? 1 : h + 1; }
      if (index === 2) h = h === 12 ? 1 : h + 1;
      return format12(h,m,period,false);
    });
    return { type: "clockRead", prompt: t().questions.read, hour, minute, period, answer, options: uniqueOptions(answer,candidates) };
  }

  function makeTimelineQuestion(custom = null) {
    if (state.activity === "dateDuration") {
      const startDay = custom?.day ?? randomInt(3,20);
      const days = custom?.offsetDays ?? randomInt(1,4);
      const startHour = custom?.hour ?? randomInt(7,15);
      const extraHours = custom?.extraHours ?? randomItem([0,2,4,6]);
      const start = dateAt(2026,6,startDay);
      const end = addDays(start,days);
      const answer = dateDurationText(days,extraHours);
      return { type: "dateTimeline", prompt: t().questions.dateDuration, start, end, startHour, endHour: (startHour + extraHours) % 24, days, extraHours, answer,
        options: uniqueOptions(answer,[dateDurationText(days-1,extraHours || 6),dateDurationText(days+1,0),dateDurationText(days,extraHours ? extraHours+1 : 1)]) };
    }

    if (state.activity === "timeMath") {
      const operator = custom?.operator ?? randomItem(["+","−","×","÷"]);
      let a;
      let b;
      let total;
      let leftText;
      let rightText;
      if (operator === "+") {
        a = custom?.duration ?? randomItem(year() >= 5 ? [45,72,90,105] : [20,25,30,35,40,45,50]);
        b = custom?.durationB ?? randomItem(year() >= 5 ? [30,45,60,75] : [15,20,25,30,35,40]);
        total = a + b;
        leftText = durationText(a); rightText = durationText(b);
      } else if (operator === "−") {
        a = custom?.duration ?? randomItem(year() >= 4 ? [120,150,180,240] : [65,75,90,105,120]);
        b = custom?.durationB ?? randomItem([15,20,30,45,60]);
        if (b >= a) b = Math.max(5,a - 15);
        total = a - b;
        leftText = durationText(a); rightText = durationText(b);
      } else if (operator === "×") {
        a = custom?.duration ?? randomItem([15,20,25,30,35,45]);
        b = randomInt(2,5);
        total = a * b;
        leftText = `${b}`; rightText = durationText(a);
      } else {
        b = randomInt(2,5);
        total = custom?.duration ?? randomItem([15,20,25,30,40]);
        a = total * b;
        leftText = durationText(a); rightText = `${b}`;
      }
      const answer = durationText(total);
      return { type: "timeMath", prompt: t().questions.timeMath, a, b, operator, leftText, rightText, answer,
        options: uniqueOptions(answer,[durationText(total+10),durationText(Math.max(5,total-10)),durationText(total+30)]) };
    }

    const isD2 = year() === 2;
    const step = isD2 ? 5 : 1;
    const startHour = custom?.hour ?? randomInt(7,17);
    const startMinute = custom?.minute ?? randomInt(0,Math.floor(55/step)) * step;
    const start = startHour * 60 + startMinute;
    const duration = custom?.duration ?? (isD2 ? randomItem([15,30,45,60]) : randomItem([35,50,65,80,95,110,125,150]));
    const end = start + duration;

    if (state.activity === "findEnd") return timelineChoice("findEnd",start,duration,end,end);
    if (state.activity === "findStart") return timelineChoice("findStart",start,duration,end,start);
    const answer = durationText(duration);
    return { type: "timeline", activity: "duration", prompt: t().questions.duration, start, end, duration, answer,
      options: uniqueOptions(answer,[durationText(duration+10),durationText(Math.max(step,duration-10)),durationText(duration+30)]) };
  }

  function timelineChoice(activity,start,duration,end,target) {
    const answer = displayTime(target);
    return { type: "timeline", activity, prompt: t().questions[activity], start, end, duration, answer,
      options: uniqueOptions(answer,[displayTime(target+15),displayTime(target-15),displayTime(target+30)]) };
  }

  function durationText(minutes) {
    const h = Math.floor(minutes / 60);
    const m = minutes % 60;
    if (!h) return `${m} ${t().labels.minutes}`;
    if (!m) return `${h} ${t().labels.hours}`;
    return `${h} ${t().labels.hours} ${m} ${t().labels.minutes}`;
  }

  function dateDurationText(days,hours = 0) {
    if (!days) return `${hours} ${t().labels.hours}`;
    if (!hours) return `${days} ${t().labels.days}`;
    return `${days} ${t().labels.days} ${hours} ${t().labels.hours}`;
  }

  function makeCalendarQuestion(custom = null) {
    const month = custom?.month ?? randomInt(0,10);
    const yearValue = 2026;
    const daysInMonth = new Date(Date.UTC(yearValue,month+1,0)).getUTCDate();
    if (state.activity === "weekday") {
      const day = custom?.day ?? randomInt(2,daysInMonth-2);
      const date = dateAt(yearValue,month,day);
      const answer = t().weekdays[date.getUTCDay()];
      return { type: "calendar", activity: "weekday", prompt: t().questions.weekday, yearValue, month, day, answer,
        options: uniqueOptions(answer,[1,2,3].map(n => t().weekdays[(date.getUTCDay()+n)%7])) };
    }
    if (state.activity === "dateDuration") {
      const day = custom?.day ?? randomInt(2,14);
      const offset = custom?.offsetDays ?? randomInt(5,14);
      const answer = `${offset} ${t().labels.days}`;
      return { type: "calendar", activity: "dateDuration", prompt: t().questions.dateDuration, yearValue, month, day, targetDay: day + offset, offset, answer,
        options: uniqueOptions(answer,[`${offset+1} ${t().labels.days}`,`${offset-1} ${t().labels.days}`,`${offset+7} ${t().labels.days}`]) };
    }
    const day = custom?.day ?? randomInt(2,Math.max(3,daysInMonth-12));
    const offset = custom?.offsetDays ?? randomInt(3,10);
    const targetDay = day + offset;
    const answer = formatDate(dateAt(yearValue,month,targetDay));
    return { type: "calendar", activity: "countDays", prompt: t().questions.countDays, yearValue, month, day, targetDay, offset, answer,
      options: uniqueOptions(answer,[targetDay-1,targetDay+1,targetDay+7].map(d => formatDate(dateAt(yearValue,month,d)))) };
  }

  function conversionPairs() {
    if (state.level === "d2") return [["hour","minute"],["day","hour"]];
    if (state.level === "d3") return [["minute","second"],["hour","minute"],["day","hour"],["week","day"],["year","month"]];
    if (state.level === "d4" && state.activity === "largeUnits") return [["decade","year"],["century","year"],["millennium","year"],["century","decade"]];
    if (state.level === "d4") return [["hour","minute"],["day","hour"],["week","day"],["year","month"]];
    return [["hour","minute"],["day","hour"],["year","month"],["decade","year"],["century","year"]];
  }

  function makeConvertQuestion(custom = null) {
    const pair = custom?.pair ?? randomItem(conversionPairs());
    const [from,to] = pair;
    if (state.activity === "fractionDecimal") {
      const presets = [
        { value: 1.2, from: "hour", to: "minute", answerValue: 72 },
        { value: 2.5, from: "day", to: "hour", answerValue: 60 },
        { value: .75, from: "hour", to: "minute", answerValue: 45 },
        { value: 1.5, from: "year", to: "month", answerValue: 18 }
      ];
      const p = custom ? { value: custom.value, from, to, answerValue: cleanNumber(custom.value * conversionFactor(from,to)) } : randomItem(presets);
      const answer = `${p.answerValue} ${unitName(p.to)}`;
      return { type: "convert", prompt: t().questions.convert, value: p.value, from: p.from, to: p.to, answer,
        options: uniqueOptions(answer,[p.answerValue+6,p.answerValue-6,p.answerValue*2].map(v => `${Math.max(0,v)} ${unitName(p.to)}`)) };
    }
    const factor = conversionFactor(from,to);
    const value = custom?.value ?? randomInt(1,state.level === "d2" ? 3 : 8);
    const answerValue = cleanNumber(value * factor);
    const answer = `${answerValue.toLocaleString("en-MY")} ${unitName(to)}`;
    return { type: "convert", prompt: t().questions.convert, value, from, to, answer,
      options: uniqueOptions(answer,[cleanNumber(answerValue+factor),cleanNumber(Math.max(0,answerValue-factor)),cleanNumber(answerValue+2*factor)].map(v => `${v.toLocaleString("en-MY")} ${unitName(to)}`)) };
  }

  function makeWorldQuestion(custom = null) {
    const cityKeys = Object.keys(cities);
    const base = custom?.base ?? randomItem(cityKeys);
    let target = custom?.target ?? randomItem(cityKeys.filter(key => key !== base && cities[key].offset !== cities[base].offset));
    if (target === base) target = cityKeys.find(key => key !== base);
    const baseMinutes = (custom?.hour ?? randomInt(0,23)) * 60 + (custom?.minute ?? randomItem([0,15,30,45]));
    const diffMinutes = Math.round((cities[target].offset - cities[base].offset) * 60);
    const targetMinutes = baseMinutes + diffMinutes;
    if (state.activity === "difference") {
      const diff = Math.abs(diffMinutes);
      const answer = durationText(diff);
      return { type: "world", activity: "difference", prompt: t().questions.difference, base, target, baseMinutes, targetMinutes, diffMinutes, answer,
        options: uniqueOptions(answer,[durationText(diff+60),durationText(Math.max(30,diff-60)),durationText(diff+30)]) };
    }
    const dayShift = Math.floor(targetMinutes / 1440) - Math.floor(baseMinutes / 1440);
    const label = dayShift > 0 ? ` (+1 ${t().labels.days})` : dayShift < 0 ? ` (-1 ${t().labels.days})` : "";
    const answer = `${formatClock24(targetMinutes)}${label}`;
    return { type: "world", activity: "localTime", prompt: t().questions.localTime, base, target, baseMinutes, targetMinutes, diffMinutes, answer,
      options: uniqueOptions(answer,[targetMinutes+60,targetMinutes-60,targetMinutes+120].map(v => `${formatClock24(v)}${Math.floor(v/1440)>Math.floor(baseMinutes/1440) ? ` (+1 ${t().labels.days})` : ""}`)) };
  }

  function render() {
    updateControls();
    const q = state.question;
    els.promptText.textContent = q.prompt;
    els.levelBadge.textContent = state.lang === "bm" ? `T${year()}` : state.lang === "zh" ? `${year()}年级` : `Y${year()}`;
    els.challengeDisplay.innerHTML = challengeMarkup(q);
    els.conceptStage.innerHTML = stageMarkup(q);
    renderAnswers(q);
    els.feedback.className = "feedback";
    els.feedback.textContent = q.type === "clockSet" ? t().readySet : t().ready;
    els.checkBtn.querySelector("span:last-child").textContent = state.solved ? t().next : t().check;
    bindDynamicEvents();
  }

  function challengeMarkup(q) {
    let main = q.prompt;
    let sub = "";
    if (q.type === "clockSet") { main = format12(q.hour,q.minute,q.period,true); sub = t().questions.set; }
    if (q.type === "system") { main = q.source; sub = t().questions.system; }
    if (q.type === "schedule") { main = displayTime(q.times[q.eventIndex]); sub = t().questions.schedule; }
    if (q.type === "timeline") { main = q.activity === "duration" ? `${displayTime(q.start)} → ${displayTime(q.end)}` : q.activity === "findEnd" ? `${displayTime(q.start)} + ${durationText(q.duration)}` : `? + ${durationText(q.duration)} = ${displayTime(q.end)}`; }
    if (q.type === "timeMath") main = `${q.leftText} ${q.operator} ${q.rightText}`;
    if (q.type === "dateTimeline") main = `${formatDate(q.start)} → ${formatDate(q.end)}`;
    if (q.type === "calendar") main = q.activity === "weekday" ? formatDate(dateAt(q.yearValue,q.month,q.day)) : q.activity === "countDays" ? `${formatDate(dateAt(q.yearValue,q.month,q.day))} + ${q.offset} ${t().labels.days}` : `${q.day} → ${q.targetDay} ${t().months[q.month]}`;
    if (q.type === "convert") { main = `${q.value} ${unitName(q.from)}`; sub = `→ ${unitName(q.to)}`; }
    if (q.type === "world") { main = `${t().cities[q.base]} → ${t().cities[q.target]}`; sub = q.activity === "localTime" ? `${t().cities[q.base]} ${formatClock24(q.baseMinutes)}` : t().questions.difference; }
    return `<div><span class="challenge-kicker">${t().yourTask}</span><div class="challenge-main">${main}</div>${sub ? `<div class="challenge-sub">${sub}</div>` : ""}</div>`;
  }

  function stageMarkup(q) {
    if (["clockRead","clockSet"].includes(q.type)) {
      const input = q.type === "clockSet" ? state.clockInput : q.hour * 60 + q.minute;
      const time = q.type === "clockSet" ? { hour: Math.floor(input/60)%12 || 12, minute: input%60 } : q;
      return `<div class="clock-wrap">${clockMarkup(time.hour,time.minute)}<div class="clock-readout">
        <div class="digital-time">${q.type === "clockSet" ? format12(time.hour,time.minute) : "--:--"}</div>
        <div class="period-label">${periodLabel(q.period,q.hour)}</div>
        ${q.type === "clockSet" ? `<div class="clock-controls"><button type="button" data-clock-delta="-60">−1 ${t().labels.hours}</button><button type="button" data-clock-delta="60">+1 ${t().labels.hours}</button><button type="button" data-clock-delta="-5">−5 ${t().labels.minutes}</button><button type="button" data-clock-delta="5">+5 ${t().labels.minutes}</button></div>` : ""}
      </div></div>`;
    }
    if (q.type === "clockSecond") return `<div class="clock-wrap">${clockMarkup(12,0,q.second)}<div class="clock-readout"><div class="digital-time">00:00:??</div><div class="period-label">1 ${t().labels.minutes} = 60 ${t().labels.seconds}</div></div></div>`;
    if (q.type === "system") return `<div class="conversion-bridge"><div class="unit-card"><span class="unit-value">${q.source}</span><span class="unit-name">${t().labels.base}</span></div><div class="bridge-arrow">→<small>12 ↔ 24</small></div><div class="unit-card target"><span class="unit-value">${state.solved ? q.answer : "?"}</span><span class="unit-name">${t().labels.target}</span></div></div>`;
    if (q.type === "schedule") return scheduleMarkup(q);
    if (["timeline","timeMath","dateTimeline"].includes(q.type)) return timelineMarkup(q);
    if (q.type === "calendar") return calendarMarkup(q);
    if (q.type === "convert") return `<div class="conversion-bridge"><div class="unit-card"><span class="unit-value">${q.value}</span><span class="unit-name">${unitName(q.from)}</span></div><div class="bridge-arrow">→<small>${state.solved ? q.answer : "?"}</small></div><div class="unit-card target"><span class="unit-value">${state.solved ? q.answer.split(" ")[0] : "?"}</span><span class="unit-name">${unitName(q.to)}</span></div></div>`;
    return worldMarkup(q);
  }

  function clockMarkup(hour,minute,second = null) {
    const numbers = Array.from({length:12},(_,i) => `<span class="clock-number" style="--a:${(i+1)*30}deg">${i+1}</span>`).join("");
    const ticks = Array.from({length:60},(_,i) => `<i class="clock-tick" style="--a:${i*6}deg;${i%5 ? "height:5px;opacity:.45" : ""}"></i>`).join("");
    const hourAngle = (hour % 12) * 30 + minute * .5;
    return `<div class="analog-clock" aria-label="${format12(hour,minute)}">${ticks}${numbers}<span class="clock-hand hour-hand" style="--hour:${hourAngle}deg"></span><span class="clock-hand minute-hand" style="--minute:${minute*6}deg"></span>${second != null ? `<span class="clock-hand second-hand" style="--second:${second*6}deg"></span>` : ""}<span class="clock-pin"></span></div>`;
  }

  function scheduleMarkup(q) {
    return `<div class="calendar-card"><div class="calendar-title">📋 ${t().activities.schedule}</div>${q.times.map((time,index) => `<div class="time-stop" style="display:grid;grid-template-columns:140px 1fr;margin:8px 0;text-align:left"><strong>${displayTime(time)}</strong><span style="align-self:center;font-size:16px">${t().events[index]}</span></div>`).join("")}</div>`;
  }

  function timelineMarkup(q) {
    if (q.type === "timeMath") {
      return `<div class="timeline-card"><div class="timeline-labels"><div class="time-stop"><span>A</span><strong>${q.leftText}</strong></div><div class="time-stop"><span>${q.operator}</span><strong>${q.rightText}</strong></div></div><div class="timeline-track"><div class="timeline-line"></div><span class="timeline-dot" style="left:0"></span><span class="timeline-dot" style="left:50%"></span><span class="timeline-dot" style="left:100%"></span><span class="timeline-bubble" style="left:50%">${q.leftText} ${q.operator} ${q.rightText}</span></div><div class="duration-pill">${state.solved ? q.answer : "?"}</div></div>`;
    }
    if (q.type === "dateTimeline") {
      return `<div class="timeline-card"><div class="timeline-labels"><div class="time-stop"><span>${t().labels.start}</span><strong>${formatClock24(q.startHour*60)}</strong><small>${formatDate(q.start)}</small></div><div class="time-stop"><span>${t().labels.end}</span><strong>${formatClock24(q.endHour*60)}</strong><small>${formatDate(q.end)}</small></div></div><div class="timeline-track"><div class="timeline-line"></div><span class="timeline-dot" style="left:0"></span><span class="timeline-dot" style="left:100%"></span><span class="timeline-bubble" style="left:50%">${state.solved ? q.answer : "?"}</span></div></div>`;
    }
    const startText = q.activity === "findStart" && !state.solved ? "?" : displayTime(q.start);
    const endText = q.activity === "findEnd" && !state.solved ? "?" : displayTime(q.end);
    const middle = q.activity === "duration" && !state.solved ? "?" : durationText(q.duration);
    return `<div class="timeline-card"><div class="timeline-labels"><div class="time-stop"><span>${t().labels.start}</span><strong>${startText}</strong></div><div class="time-stop"><span>${t().labels.end}</span><strong>${endText}</strong></div></div><div class="timeline-track"><div class="timeline-line"></div><span class="timeline-dot" style="left:0"></span><span class="timeline-dot" style="left:100%"></span><span class="timeline-bubble" style="left:50%">${middle}</span></div></div>`;
  }

  function calendarMarkup(q) {
    const first = dateAt(q.yearValue,q.month,1).getUTCDay();
    const days = new Date(Date.UTC(q.yearValue,q.month+1,0)).getUTCDate();
    const cells = [];
    for (let i=0;i<first;i+=1) cells.push(`<span class="calendar-day empty"></span>`);
    for (let day=1;day<=days;day+=1) {
      const isStart = day === q.day;
      const isTarget = state.solved && (day === q.targetDay || (q.activity === "weekday" && day === q.day));
      const inRange = state.solved && q.targetDay && day > q.day && day < q.targetDay;
      cells.push(`<span class="calendar-day${isStart ? " start" : ""}${isTarget ? " target" : ""}${inRange ? " range" : ""}">${day}</span>`);
    }
    return `<div class="calendar-card"><div class="calendar-title">${t().months[q.month]} ${q.yearValue}</div><div class="calendar-grid">${t().weekdays.map(day => `<span class="weekday">${day.slice(0,state.lang === "zh" ? 3 : 3)}</span>`).join("")}${cells.join("")}</div><div class="calendar-legend"><span><i class="legend-dot"></i>${t().labels.start}</span>${q.targetDay ? `<span><i class="legend-dot target"></i>${state.solved ? t().labels.end : t().labels.unknown}</span>` : ""}</div></div>`;
  }

  function worldMarkup(q) {
    const order = ["london","riyadh","delhi","kuala","perth","tokyo"];
    return `<div class="world-board"><div class="world-strip">${order.map(key => {
      const active = key === q.base || key === q.target;
      let time = "";
      if (key === q.base) time = formatClock24(q.baseMinutes);
      else if (key === q.target) time = state.solved && q.activity === "localTime" ? formatClock24(q.targetMinutes) : "?";
      else time = `UTC${cities[key].offset >= 0 ? "+" : ""}${cities[key].offset}`;
      return `<div class="city-card${active ? " active" : ""}"><span class="city-emoji">${cities[key].emoji}</span><span class="city-name">${t().cities[key]}</span><span class="city-time">${time}</span></div>`;
    }).join("")}</div><div class="world-axis"></div><div class="world-note">${t().cities[q.base]} UTC${cities[q.base].offset >= 0 ? "+" : ""}${cities[q.base].offset} → ${t().cities[q.target]} UTC${cities[q.target].offset >= 0 ? "+" : ""}${cities[q.target].offset}</div></div>`;
  }

  function renderAnswers(q) {
    if (q.type === "clockSet") {
      els.answerZone.innerHTML = "";
      return;
    }
    els.answerZone.innerHTML = `<div class="option-grid">${q.options.map(value => {
      const selected = state.selected === value;
      const wrong = state.wrongSelection === value;
      let label = value;
      if (q.type === "schedule") label = t().events[Number(value)];
      return `<button class="answer-option${selected ? " selected" : ""}${wrong ? " wrong" : ""}" type="button" data-answer="${String(value).replace(/"/g,"&quot;")}">${label}</button>`;
    }).join("")}</div>`;
  }

  function bindDynamicEvents() {
    document.querySelectorAll("[data-answer]").forEach(btn => btn.addEventListener("click",() => {
      state.selected = btn.dataset.answer;
      state.wrongSelection = null;
      playTone("click");
      document.querySelectorAll("[data-answer]").forEach(node => {
        node.classList.toggle("selected",node.dataset.answer === state.selected);
        node.classList.remove("wrong");
      });
    }));
    document.querySelectorAll("[data-clock-delta]").forEach(btn => btn.addEventListener("click",() => {
      state.clockInput = (state.clockInput + Number(btn.dataset.clockDelta) + 720) % 720;
      playTone("click");
      els.conceptStage.innerHTML = stageMarkup(state.question);
      bindDynamicEvents();
    }));
  }

  function checkAnswer() {
    if (state.solved) { generateQuestion(); playTone("click"); return; }
    const q = state.question;
    const correct = q.type === "clockSet" ? state.clockInput === q.answer % 720 : state.selected === q.answer;
    if (q.type !== "clockSet" && state.selected == null) {
      els.feedback.className = "feedback error";
      els.feedback.textContent = t().chooseFirst;
      playTone("wrong");
      return;
    }
    if (!correct) {
      state.wrongSelection = state.selected;
      els.feedback.className = "feedback error";
      els.feedback.textContent = t().wrong;
      if (state.selected != null) document.querySelectorAll("[data-answer]").forEach(node => node.classList.toggle("wrong",node.dataset.answer === state.selected));
      playTone("wrong");
      return;
    }
    state.solved = true;
    state.wrongSelection = null;
    els.feedback.className = "feedback success";
    els.feedback.textContent = `${t().correct} ${q.answer ?? format12(q.hour,q.minute,q.period,true)}`;
    els.checkBtn.querySelector("span:last-child").textContent = t().next;
    els.conceptStage.innerHTML = stageMarkup(q);
    bindDynamicEvents();
    celebrate();
    playTone("success");
  }

  function celebrate() {
    const colors = ["#ffca4f","#35a58c","#3579b9","#ef9837","#d64f4f"];
    for (let i=0;i<28;i+=1) {
      const piece = document.createElement("i");
      piece.className = "confetti";
      piece.style.left = `${randomInt(2,98)}%`;
      piece.style.background = randomItem(colors);
      piece.style.animationDelay = `${Math.random()*.25}s`;
      piece.style.setProperty("--drift",`${randomInt(-90,90)}px`);
      els.celebrationLayer.appendChild(piece);
    }
    setTimeout(() => els.celebrationLayer.replaceChildren(),1800);
  }

  function resetQuestion() {
    state.selected = null;
    state.wrongSelection = null;
    state.solved = false;
    if (state.question.type === "clockSet") state.clockInput = 0;
    render();
    playTone("click");
  }

  function fieldMarkup(label,id,type="number",value="",extra="") {
    return `<label class="field"><span>${label}</span><input id="${id}" type="${type}" value="${value}" ${extra}></label>`;
  }
  function selectMarkup(label,id,options) {
    return `<label class="field"><span>${label}</span><select id="${id}">${options.map(([value,text]) => `<option value="${value}">${text}</option>`).join("")}</select></label>`;
  }

  function openTeacherModal() {
    els.teacherError.textContent = "";
    els.teacherIntro.textContent = t().teacherIntro;
    let html = "";
    if (state.mode === "clock") {
      if (state.activity === "seconds") html = fieldMarkup(t().labels.seconds,"teacherSecond","number",30,'min="0" max="59"');
      else if (state.activity === "system") html = fieldMarkup(t().hour,"teacherHour","number",13,'min="0" max="23"') + fieldMarkup(t().minute,"teacherMinute","number",25,'min="0" max="59"');
      else if (state.activity === "schedule") html = fieldMarkup(t().hour,"teacherHour","number",8,'min="1" max="20"') + fieldMarkup(t().minute,"teacherMinute","number",0,'min="0" max="59"');
      else html = fieldMarkup(t().hour,"teacherHour","number",7,'min="1" max="12"') + fieldMarkup(t().minute,"teacherMinute","number",30,'min="0" max="59"') + selectMarkup(t().period,"teacherPeriod",[["am",t().periods.am],["pm",t().periods.pm]]);
    } else if (state.mode === "timeline") {
      html = fieldMarkup(t().hour,"teacherHour","number",8,'min="0" max="23"') + fieldMarkup(t().minute,"teacherMinute","number",30,'min="0" max="59"') + fieldMarkup(t().duration,"teacherDuration","number",state.level === "d2" ? 30 : 75,'min="1" max="600"');
      if (state.activity === "dateDuration") html += fieldMarkup(t().day,"teacherDay","number",10,'min="1" max="20"') + fieldMarkup(t().offsetDays,"teacherOffset","number",2,'min="1" max="10"');
    } else if (state.mode === "calendar") {
      html = fieldMarkup(t().day,"teacherDay","number",8,'min="1" max="20"') + fieldMarkup(t().offsetDays,"teacherOffset","number",7,'min="1" max="20"');
    } else if (state.mode === "convert") {
      const pairs = conversionPairs();
      const units = [...new Set(pairs.flat())];
      html = fieldMarkup(t().value,"teacherValue","number",state.activity === "fractionDecimal" ? 1.5 : 2,'min="0.1" max="100" step="0.1"') + selectMarkup(t().fromUnit,"teacherFrom",units.map(u => [u,unitName(u)])) + selectMarkup(t().toUnit,"teacherTo",units.map(u => [u,unitName(u)]));
    } else {
      const cityOptions = Object.keys(cities).map(key => [key,t().cities[key]]);
      html = selectMarkup(t().baseCity,"teacherBase",cityOptions) + selectMarkup(t().targetCity,"teacherTarget",cityOptions) + fieldMarkup(t().hour,"teacherHour","number",15,'min="0" max="23"') + fieldMarkup(t().minute,"teacherMinute","number",0,'min="0" max="59"');
    }
    els.teacherFields.innerHTML = html;
    if (document.getElementById("teacherTo")) document.getElementById("teacherTo").selectedIndex = 1;
    if (document.getElementById("teacherTarget")) document.getElementById("teacherTarget").selectedIndex = 3;
    els.teacherModal.hidden = false;
    setTimeout(() => els.teacherFields.querySelector("input,select")?.focus(),0);
  }

  function closeTeacherModal() { els.teacherModal.hidden = true; }

  function useTeacherQuestion() {
    const number = id => Number(document.getElementById(id)?.value);
    let question;
    if (state.mode === "clock") {
      if (state.activity === "seconds") {
        const second = number("teacherSecond");
        if (!Number.isInteger(second) || second < 0 || second > 59) return teacherError(t().invalid);
        question = makeClockQuestion({ second });
        closeTeacherModal();
        setQuestion(question,true);
        playTone("click");
        return;
      }
      const hour = number("teacherHour"), minute = number("teacherMinute");
      if (!Number.isInteger(hour) || !Number.isInteger(minute) || minute < 0 || minute > 59 || (state.activity !== "system" && (hour < 1 || hour > 12)) || (state.activity === "system" && (hour < 0 || hour > 23))) return teacherError(t().invalid);
      if (state.level === "d2" && minute % 5 !== 0) return teacherError(t().exactMinute);
      question = makeClockQuestion(state.activity === "system" ? { hour24: hour,minute,ask24:true } : { hour,minute,period: document.getElementById("teacherPeriod")?.value || "am" });
    } else if (state.mode === "timeline") {
      const hour = number("teacherHour"), minute = number("teacherMinute"), duration = number("teacherDuration");
      if (!Number.isInteger(hour) || !Number.isInteger(minute) || !Number.isInteger(duration) || hour < 0 || hour > 23 || minute < 0 || minute > 59 || duration < 1 || duration > 600) return teacherError(t().invalid);
      if (state.level === "d2" && (minute % 5 !== 0 || ![15,30,45,60].includes(duration))) return teacherError(t().exactMinute);
      question = makeTimelineQuestion({ hour,minute,duration,day:number("teacherDay") || 10,offsetDays:number("teacherOffset") || 2 });
    } else if (state.mode === "calendar") {
      const day = number("teacherDay"), offsetDays = number("teacherOffset");
      if (!Number.isInteger(day) || !Number.isInteger(offsetDays) || day < 1 || day > 20 || offsetDays < 1 || offsetDays > 20) return teacherError(t().invalid);
      question = makeCalendarQuestion({ day,offsetDays,month:6 });
    } else if (state.mode === "convert") {
      const value = number("teacherValue"), from = document.getElementById("teacherFrom").value, to = document.getElementById("teacherTo").value;
      if (!(value > 0) || from === to || !conversionPairs().some(pair => pair.includes(from) && pair.includes(to))) return teacherError(from === to ? t().different : t().invalid);
      question = makeConvertQuestion({ value,pair:[from,to] });
    } else {
      const base = document.getElementById("teacherBase").value, target = document.getElementById("teacherTarget").value, hour = number("teacherHour"), minute = number("teacherMinute");
      if (base === target || cities[base].offset === cities[target].offset) return teacherError(t().different);
      if (!Number.isInteger(hour) || !Number.isInteger(minute) || hour < 0 || hour > 23 || minute < 0 || minute > 59) return teacherError(t().invalid);
      question = makeWorldQuestion({ base,target,hour,minute });
    }
    closeTeacherModal();
    setQuestion(question,true);
    playTone("click");
  }

  function teacherError(message) { els.teacherError.textContent = message; playTone("wrong"); }

  els.modeTabs.addEventListener("click",event => {
    const btn = event.target.closest("[data-mode]");
    if (!btn || btn.hidden) return;
    state.mode = btn.dataset.mode;
    state.activity = curriculum[state.level].activities[state.mode][0];
    generateQuestion();
    playTone("click");
  });
  els.levelSelect.addEventListener("change",() => {
    state.level = els.levelSelect.value;
    syncCurriculum();
    state.activity = curriculum[state.level].activities[state.mode][0];
    generateQuestion();
    playTone("click");
  });
  els.activitySelect.addEventListener("change",() => { state.activity = els.activitySelect.value; generateQuestion(); playTone("click"); });
  document.querySelectorAll(".language-btn").forEach(btn => btn.addEventListener("click",() => {
    state.lang = btn.dataset.lang;
    generateQuestion();
    playTone("click");
  }));
  els.soundToggle.addEventListener("click",() => { state.sound = !state.sound; updateControls(); if (state.sound) playTone("click"); });
  els.checkBtn.addEventListener("click",checkAnswer);
  els.resetBtn.addEventListener("click",resetQuestion);
  els.newQuestionBtn.addEventListener("click",() => { generateQuestion(); playTone("click"); });
  els.teacherBtn.addEventListener("click",openTeacherModal);
  els.teacherCloseBtn.addEventListener("click",closeTeacherModal);
  els.teacherCancelBtn.addEventListener("click",closeTeacherModal);
  els.teacherUseBtn.addEventListener("click",useTeacherQuestion);
  els.teacherModal.addEventListener("click",event => { if (event.target === els.teacherModal) closeTeacherModal(); });
  document.addEventListener("keydown",event => { if (event.key === "Escape" && !els.teacherModal.hidden) closeTeacherModal(); });

  generateQuestion();
})();
