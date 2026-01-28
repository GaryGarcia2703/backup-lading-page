// ======= funcion para el navbar (menu hamburguesa) =========

const mobileBtn = document.querySelector(".btn-mobile")
const navLinks = document.querySelector("#nav-links")
const icon = document.querySelector(".btn-mobile i")
const linkBtn = document.querySelectorAll(".links-ul-nav")

mobileBtn.addEventListener("click" , () => {
    navLinks.classList.toggle('show')
    icon.classList.toggle('fa-bars')
    icon.classList.toggle('fa-times')
})

// al usar queryselectroALL usar primeramente un for para despues usar un eventlistener
// primero navegar esntre los elementos para despues decidir que hacer con ellos
linkBtn.forEach(link => {
    link.addEventListener("click", () => {
        navLinks.classList.remove("show");
        icon.classList.remove("fa-times");
        icon.classList.add("fa-bars");
    }) 
});
