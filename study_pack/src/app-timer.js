(function () {
  "use strict";

  const A = window.StudyApp;
  let timer = null;

  function fmt(seconds) {
    const s = Math.max(0, Math.round(seconds));
    return `${A.pad(Math.floor(s / 60))}:${A.pad(s % 60)}`;
  }

  function phaseInfo() {
    if (!timer) return { index: 0, phase: { name: "Focus", minutes: 50, prompt: "" }, phaseLeft: 0 };
    const elapsed = timer.total - timer.left;
    let cumulative = 0;
    let index = timer.phases.length - 1;
    for (let i = 0; i < timer.phases.length; i += 1) {
      const duration = Number(timer.phases[i].minutes) * 60;
      if (elapsed < cumulative + duration) {
        index = i;
        break;
      }
      cumulative += duration;
    }
    const phase = timer.phases[index] || timer.phases[timer.phases.length - 1];
    const phaseStart = timer.phases.slice(0, index).reduce((sum, p) => sum + Number(p.minutes) * 60, 0);
    return {
      index,
      phase,
      phaseLeft: Math.max(0, Number(phase.minutes) * 60 - (elapsed - phaseStart))
    };
  }

  function renderTimer() {
    const root = A.$("#modalRoot");
    if (!root || !timer) return;
    const subtitle = timer.courseCode
      ? `${timer.courseCode}${timer.sectionTitle ? ` · ${timer.sectionTitle}` : ""}`
      : `${timer.totalMinutes} minutes`;
    root.innerHTML = `<div class="modal-backdrop">
      <div class="modal" role="dialog" aria-modal="true" aria-label="Focus timer">
        <div class="modal-head">
          <div>
            <div class="eyebrow">Focus timer</div>
            <h3>${A.esc(timer.title)}</h3>
            <p class="small muted">${A.esc(subtitle)}</p>
          </div>
          <button type="button" class="modal-close" data-action="timer-close" aria-label="Close timer">×</button>
        </div>
        <div class="timer-box">
          <div>
            <div class="timer-phase" id="timerPhase">Recall</div>
            <div class="timer-digits" id="timerDigits">50:00</div>
            <div class="small muted" id="timerHint"></div>
          </div>
        </div>
        <div class="timer-bar"><span id="timerBar" style="width:0%"></span></div>
        <div id="timerPhaseList" class="stack mt-2"></div>
        <div class="row mt-2">
          <button type="button" class="btn btn-primary" id="timerToggle" data-action="timer-toggle">Pause</button>
          <button type="button" class="btn" data-action="timer-restart">Restart</button>
          <button type="button" class="btn" data-action="timer-log-close">Log &amp; close</button>
        </div>
        <p class="small muted mt-1">The timer logs the minutes you actually complete. Close it only when you are done with the block.</p>
      </div>
    </div>`;
    updateTimerUI();
  }

  function updateTimerUI() {
    if (!timer) return;
    const info = phaseInfo();
    const digits = A.$("#timerDigits");
    if (digits) digits.textContent = fmt(timer.left);
    const phase = A.$("#timerPhase");
    if (phase) phase.textContent = info.phase.name;
    const hint = A.$("#timerHint");
    if (hint) hint.textContent = info.phase.prompt || "";
    const bar = A.$("#timerBar");
    if (bar) bar.style.width = `${Math.min(100, ((timer.total - timer.left) / timer.total) * 100).toFixed(1)}%`;
    const toggle = A.$("#timerToggle");
    if (toggle) toggle.textContent = timer.left <= 0 ? "Done" : timer.running ? "Pause" : "Resume";
    const list = A.$("#timerPhaseList");
    if (list) {
      list.innerHTML = timer.phases.map((p, i) => {
        const badge = i < info.index ? "badge-done" : i === info.index ? "badge-core" : "";
        return `<div class="row spread">
          <span class="${i === info.index ? "" : "muted"}">${i + 1}. ${A.esc(p.name)}</span>
          <span class="badge ${badge}">${A.esc(p.minutes)} min</span>
        </div>`;
      }).join("");
    }
  }

  function logSession() {
    if (!timer || timer.logged) return false;
    const minutes = Math.round((timer.total - timer.left) / 60);
    if (minutes < 1) return false;
    A.state.sessions.push({
      id: A.uid(),
      date: A.todayISO(),
      course: timer.courseCode || "Review",
      section: timer.sectionId || "",
      minutes,
      ts: Date.now()
    });
    timer.logged = true;
    A.saveState();
    return true;
  }

  function tick() {
    if (!timer || !timer.running) return;
    timer.left = Math.max(0, timer.left - 1);
    if (timer.left === 0) {
      timer.running = false;
      clearInterval(timer.interval);
      const logged = logSession();
      A.toast(logged ? "Block complete and logged." : "Block complete.");
    }
    updateTimerUI();
  }

  function openTimer(options = {}) {
    if (timer) {
      clearInterval(timer.interval);
      timer = null;
    }
    const minutes = Math.max(1, Number(options.minutes) || 50);
    const total = Math.round(minutes * 60);
    const section = options.sectionId ? A.sectionById.get(options.sectionId) : null;
    const phases = minutes === 50 && (A.META.phasePlan || []).length
      ? A.META.phasePlan.map(p => ({
        name: p.name,
        minutes: Number(p.minutes) || 5,
        prompt: p.prompt || ""
      }))
      : [{ name: options.phaseName || "Focus block", minutes, prompt: "" }];
    timer = {
      total,
      left: total,
      totalMinutes: minutes,
      running: true,
      logged: false,
      interval: null,
      phases,
      courseCode: options.courseCode || null,
      sectionId: options.sectionId || null,
      sectionTitle: section ? section.title : "",
      title: options.title || (section ? section.title : "Focus block")
    };
    renderTimer();
    timer.interval = setInterval(tick, 1000);
  }

  function restartTimer() {
    if (!timer) return;
    clearInterval(timer.interval);
    timer.left = timer.total;
    timer.running = true;
    timer.logged = false;
    timer.interval = setInterval(tick, 1000);
    updateTimerUI();
  }

  function closeTimer() {
    if (!timer) {
      A.closeModal();
      return;
    }
    clearInterval(timer.interval);
    if (!timer.logged) {
      const minutes = Math.round((timer.total - timer.left) / 60);
      if (minutes >= 2 && window.confirm(`Log the ${minutes} minute${minutes === 1 ? "" : "s"} you completed?`)) {
        logSession();
      }
    }
    timer = null;
    A.closeModal();
    A.renderAll();
  }

  A.openTimer = openTimer;
  A.closeTimer = closeTimer;
  A.timerRestart = restartTimer;
  A.timerToggle = function () {
    if (!timer) return;
    if (timer.left <= 0) return;
    timer.running = !timer.running;
    updateTimerUI();
  };
  A.timerLogClose = function () {
    if (!timer) return;
    const logged = logSession();
    timer = null;
    A.closeModal();
    A.renderAll();
    A.toast(logged ? "Session logged." : "Closed.");
  };
})();
