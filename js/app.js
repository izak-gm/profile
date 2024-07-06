// typed animaton
var typed = new Typed(".text", {
  strings: ["a Web developer", ",a Data Analyst", " and Backend Developer."],
  typeSpeed: 100,
  backSpeed: 100,
  backDelay: 1000,
  loop: true,
});

//mobile menu display

const menu = document.querySelector("#mobile-menu");
const menu__links = document.querySelector(".header__menu");

menu.addEventListener("click", function () {
  menu.classList.toggle("is-active");
  menu__links.classList.toggle("active");
});

// code to control the dropdown in projects
const dropdown = document.querySelector(".devops-projects-btn");
const link = document.querySelector(".hyper");

dropdown.addEventListener("click", () => {
  if (link.style.display === "none" || link.style.display === " ") {
    link.style.display = "block";
  } else {
    link.style.display = "none";
  }
});
document.querySelectorAll(".devops-projects-btn").forEach((button) => {
  button.addEventListener("click", () => {
    const hyper = button.nextElementSibling;
    hyper.style.display = hyper.style.display === "block" ? "none" : "block";
  });
});