document.addEventListener("DOMContentLoaded", () => {

  const openBtn = document.getElementById("open-cta");
  const overlay = document.getElementById("cta-overlay");
  const closeBtn = document.querySelector(".cta-close");

  // botón de cta dentro del modal de los planes
  const cta_btn = document.getElementById("cta-plano") 

  if (!openBtn || !overlay) return;

  // abrir modal de whatsapp desde cta-plano
  cta_btn.addEventListener("click" , () => {
    overlay.classList.add("show");
    document.body.style.overflow = "hidden";
  })

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
