// ====== animacion para la seccion HERO =======
const heroContent = document.querySelector('#hero-content');

window.addEventListener('scroll', () => {
    const scroll = window.scrollY;
    const limit = 300;

    const progress = Math.min(scroll / limit, 1);

    heroContent.style.transform = `
        translateY(${progress * -80}px)
        scale(${1 - progress * 0.4})
    `;
});

// trancision suave al hacer scroll
const header = document.querySelector('header');

window.addEventListener('scroll', () => {
    if (window.scrollY > 520) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});

// cambio de logo azul a blanco al hacer scroll
const logo = document.getElementById("navbar-logo");

window.addEventListener("scroll", () => {
    if (window.scrollY > 520) {
        header.classList.add("scrolled");
        logo.src = "src/img/logo_blanco.png"; // logo para fundo claro
    } else {
        header.classList.remove("scrolled");
        logo.src = "src/img/logo_azul.png"; // logo original
    }
});
