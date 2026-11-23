(function () {
  "use strict";

  const A = window.StudyApp;
  let toastTimer = null;

  function toast(message) {
    const el = A.$("#toast");
    if (!el) return;
    el.textContent = message;
    el.classList.add("show");
    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => el.classList.remove("show"), 2600);
  }

  function openModal(title, body, subtitle) {
    const root = A.$("#modalRoot");
    if (!root) return;
    root.innerHTML = `<div class="modal-backdrop">
      <div class="modal" role="dialog" aria-modal="true" aria-label="${A.esc(title)}">
        <div class="modal-head">
          <div>
            <div class="eyebrow">Study pack</div>
            <h3>${A.esc(title)}</h3>
            ${subtitle ? `<p class="small muted">${A.esc(subtitle)}</p>` : ""}
          </div>
          <button type="button" class="modal-close" data-action="close-modal" aria-label="Close">×</button>
        </div>
        ${body}
      </div>
    </div>`;
  }

  function closeModal() {
    const root = A.$("#modalRoot");
    if (root) root.innerHTML = "";
  }

  A.toast = toast;
  A.openModal = openModal;
  A.closeModal = closeModal;
})();
