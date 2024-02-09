const mobileMenu = document.querySelector(".mobile-menu");
const menuBtnOpen = document.querySelector(".menu-btn-open");
const menuBtnClose = document.querySelector(".menu-btn-close");

const togglModal = () => mobileMenu.classList.toggle("is-open");

menuBtnOpen.addEventListener("click", togglModal);
menuBtnClose.addEventListener("click", togglModal);
