const navBtn = document.querySelector(".nav__btn");
const navMenu = document.querySelector(".nav-mob");
let open = false;
navBtn.addEventListener("click", () => {
  if (open) {
    navBtn.classList.remove("nav__btn--open");
    navMenu.classList.remove("nav-menu--open");
    open = false;
  } else {
    navBtn.classList.add("nav__btn--open");
    navMenu.classList.add("nav-menu--open");
    open = true;
  }
});
