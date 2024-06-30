var typed = new Typed(".text", {
  strings: ["a Web developer", ",a Data Analyst", " and Backend Developer."],
  typeSpeed: 100,
  backSpeed: 100,
  backDelay: 1000,
  loop: true
});
// //mobile menu display

const menu = document.querySelector("#mobile-menu");
const menu__links = document.querySelector(".header__menu");

menu.addEventListener("click", function () {
  menu.classList.toggle("is-active");
  menu__links.classList.toggle("active");
});