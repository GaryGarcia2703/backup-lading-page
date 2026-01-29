document.addEventListener("DOMContentLoaded", () => {
const planos = {
  basico: {
    titulo: "Plano Básico",
    sub_titulo: "Proteção essencial para manter seus dados seguros no dia a dia",
    beneficios: [
      { texto: "Backup automático diário", tipo: "vantagem" },
      { texto: "Execução sem intervenção manual", tipo: "vantagem" },
      { texto: "Criptografia AES-256", tipo: "vantagem" },
      { texto: "Proteção contra exclusão acidental", tipo: "vantagem" },

      { texto: "Recuperação sob solicitação", tipo: "diferencial" },
      { texto: "Armazenamento em nuvem segura", tipo: "diferencial" },
      { texto: "Suporte em horário comercial", tipo: "diferencial" }
    ]
  },

  profissional: {
    titulo: "Plano Profissional",
    sub_titulo: "Mais controle, desempenho e agilidade para empresas em crescimento",
    beneficios: [
      { texto: "Backup automático diário ou incremental", tipo: "vantagem" },
      { texto: "Redução de impacto em performance", tipo: "vantagem" },
      { texto: "Criptografia avançada de dados", tipo: "vantagem" },
      { texto: "Retenção de dados estendida", tipo: "vantagem" },

      { texto: "Recuperação rápida com SLA reduzido", tipo: "diferencial" },
      { texto: "Monitoramento básico de backups", tipo: "diferencial" },
      { texto: "Suporte técnico prioritário", tipo: "diferencial" }
    ]
  },

  avancado: {
    titulo: "Plano Avançado",
    sub_titulo: "Segurança completa, alta disponibilidade e suporte contínuo",
    beneficios: [
      { texto: "Backups em múltiplos horários por dia", tipo: "vantagem" },
      { texto: "Alta disponibilidade dos dados", tipo: "vantagem" },
      { texto: "Armazenamento redundante", tipo: "vantagem" },
      { texto: "Retenção totalmente personalizada", tipo: "vantagem" },

      { texto: "Monitoramento contínuo 24/7", tipo: "diferencial" },
      { texto: "Recuperação imediata em falhas críticas", tipo: "diferencial" },
      { texto: "Suporte técnico especializado", tipo: "diferencial" }
    ]
  }
};

  const modal = document.getElementById("plano-modal");
  const titulo = document.getElementById("plano-titulo");
  const lista = document.getElementById("plano-beneficios");
  const closeBtn = document.getElementById("plano-close");
  const cta_btn = document.getElementById("cta-plano") 
  const conteiner_title = document.querySelector("#plano-title-container")
  const sub_titulo = document.createElement("h4")

  // algoritmo para renderizar infomaciones del modal
  document.querySelectorAll(".plano-card").forEach(card => {
    card.addEventListener("click", () => {
      const tipo = card.dataset.plano;
      const dados = planos[tipo];

      
      
      sub_titulo.innerHTML = ""
      sub_titulo.textContent = dados.sub_titulo

      

      conteiner_title.appendChild(sub_titulo)


      titulo.textContent = dados.titulo;

      lista.innerHTML = "";

      dados.beneficios.forEach(item => {
        const li = document.createElement("li");
        li.classList.add(item.tipo)

        // icono o emoji creado
        const icon = document.createElement("i");

        // diferencia para colocar iconos deiferentes segun la clase
        if (item.tipo === "vantagem") {
          icon.className = "fa-solid fa-circle-check";
        } else {
          icon.className = "fa-solid fa-gear";
        }

        const span = document.createElement("span")
        span.textContent = item.texto

        
        li.appendChild(icon)
        li.appendChild(span)
        lista.appendChild(li);
      });

        modal.classList.add("show");
        document.body.style.overflow = "hidden";
    });
  });

  // fechar o modal ao fazer click no botão do cta
  cta_btn.addEventListener("click" ,() => {
    modal.classList.remove("show")
    document.body.style.overflow = "";
  })

  // fechar o menu de especificações
  function fecharModal() {
    modal.classList.remove("show");
    document.body.style.overflow = "";
  }

  // fechar o modal ao clickar fora dele
  modal.addEventListener("click", (e) => {
    if (e.target === modal) {
      modal.classList.remove("show");
      document.body.style.overflow = "";
    }
  });

  // chamada da função para fechar modal
  closeBtn.addEventListener("click", fecharModal);

});


