document.addEventListener("DOMContentLoaded", () => {

  const openBtn = document.getElementById("open-cta");
  const overlay = document.getElementById("cta-overlay");
  const closeBtn = document.querySelector(".cta-close");

  // ===== ABRIR MODAL =====
  openBtn.addEventListener("click", () => {
    overlay.classList.add("show");
    document.body.style.overflow = "hidden";
  });

  // ===== CERRAR MODAL =====
  closeBtn.addEventListener("click", () => {
    overlay.classList.remove("show");
    document.body.style.overflow = "";
  });

  // ======= CERRAR AL CLICKAR EN OTRO LADO
  overlay.addEventListener("click", (e) => {
    if (e.target === overlay) {
      overlay.classList.remove("show");
      document.body.style.overflow = "";
    }
  });

});
