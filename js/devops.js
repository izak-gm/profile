// dropdown section
document.querySelectorAll(".devops-projects-btn").forEach(button => {
        button.addEventListener("click", () => {
          const hyper = button.nextElementSibling;
          hyper.style.display = hyper.style.display === "block" ? "none" : "block";
        });
      });

  // menu mobile system
 const menu = document.querySelector("#mobile-menu");
 const menu__links = document.querySelector(".header__menu");

 menu.addEventListener("click", function () {
   menu.classList.toggle("is-active");
   menu__links.classList.toggle("active");
 });
