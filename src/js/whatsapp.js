// FUNCIÓN PARA MANDAR DATOS DEL FORM PARA EL NUMERO DE LA EMPRESA

const form = document.getElementById("form-whatsapp");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  const nome = document.getElementById("nome").value.trim();
  const email = document.getElementById("email").value.trim();
  const telefone = document.getElementById("telefone").value.trim();
  const mensagem = document.getElementById("mensagem").value.trim();

  const numeroEmpresa = "554792707304"; 
  

  const texto = `
        📩 *Nova consulta pelo site*

        👤 Nome: ${nome}
        📧 E-mail: ${email}
        📱 WhatsApp: ${telefone}

        📝 Mensagem:
        ${mensagem}
  `;

  const textoCodificado = encodeURIComponent(texto);

  const url = `https://wa.me/${numeroEmpresa}?text=${textoCodificado}`;

  window.open(url, "_blank");
});
