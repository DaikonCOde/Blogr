const navMenu = document.querySelector(".header__site--nav-mobile");
const navIcon = document.querySelector(".nav-mobile-icon");

const contentNavMenu = document.querySelector(".aside-navmenu")

navMenu.addEventListener("click", e => {
  if (e.target == navMenu || e.target == navIcon ) {
    navIcon.classList.toggle("nav-active");
    contentNavMenu.classList.toggle("active")
  } else {
    navIcon.classList.remove("nav-active");
    contentNavMenu.classList.remove("active")
  }
})