document.addEventListener("DOMContentLoaded", () => {
  const planos = {
    basico: {
      titulo: "Plano Básico",
      beneficios: [
        "Backup automático diário",
        "Criptografia de dados",
        "Retenção padrão",
        "Recuperação sob solicitação",
        "Suporte em horário comercial"
      ]
    },
    profissional: {
      titulo: "Plano Profissional",
      beneficios: [
        "Backup automático diário ou incremental",
        "Armazenamento criptografado",
        "Retenção estendida",
        "Recuperação rápida",
        "Monitoramento básico",
        "Suporte técnico prioritário"
      ]
    },
    avancado: {
      titulo: "Plano Avançado",
      beneficios: [
        "Backup em múltiplos horários",
        "Armazenamento redundante",
        "Retenção personalizada",
        "Monitoramento contínuo",
        "Recuperação imediata",
        "Suporte especializado 24/7"
      ]
    }
  };

  const modal = document.getElementById("plano-modal");
  const overlay = document.getElementById("plano-overlay");
  const titulo = document.getElementById("plano-titulo");
  const lista = document.getElementById("plano-beneficios");
  const closeBtn = document.getElementById("plano-close");

  document.querySelectorAll(".plano-card").forEach(card => {
    card.addEventListener("click", () => {
      const tipo = card.dataset.plano;
      const dados = planos[tipo];

      titulo.textContent = dados.titulo;
      lista.innerHTML = "";

      dados.beneficios.forEach(item => {
        const li = document.createElement("li");
        li.textContent = item;
        lista.appendChild(li);
      });

        modal.classList.add("show");
        overlay.classList.add("show");
        document.body.style.overflow = "hidden";
    });
  });

  function fecharModal() {
    modal.classList.remove("show");
    overlay.classList.remove("show");
    document.body.style.overflow = "";
  }

  modal.addEventListener("click", (e) => {
    if (e.target === modal) {
      modal.classList.remove("show");
      document.body.style.overflow = "";
    }
  });

  closeBtn.addEventListener("click", fecharModal);
  overlay.addEventListener("click", fecharModal);

  

});


