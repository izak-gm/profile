var typed = new Typed(".text", {
  strings: ["Web developer", "Data Analyst", " and Backend Engineer"],
  typeSpeed: 100,
  backSpeed: 100,
  backDelay: 1000,
  loop: true
});
//mobile menu display
const menu = document.querySelector("#mobile-menu");
const menulinks = document.querySelector(".header_menu");

menu.addEventListener("click", function () {
  menu.classList.toggle("is-active");
  menulinks.classList.toggle("active");
});

// animation coding
const scrollers = document.querySelectorAll(".scroller");

if (!window.matchMedia("(prefers-reduced-motion:reduce)").matches) {
  addAnimation();
}
function addAnimation() {
  scrollers.forEach((scroller) => {
    scroller.setAttribute("data-animated", true);
  });
}
