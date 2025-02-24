const navItems = document.querySelectorAll(".nav-bar-list .nav-item a");

navItems.forEach((item) => {
  item.addEventListener("click", function () {
    navItems.forEach((nav) => nav.classList.remove("active"));

    this.classList.add("active");
  });
});
window.addEventListener("scroll", function () {
  const navbar = document.querySelector(".header-section");

  if (window.scrollY > 70) {
    navbar.classList.add("back");
  } else {
    navbar.classList.remove("back");
  }
});

const menu = document.getElementById("menu");
const close = document.getElementById("close");
const navList = document.querySelector(".nav-bar-list");
menu.addEventListener("click", function () {
  navList.classList.add("right");
});

// Close Menu
close.addEventListener("click", function () {
  navList.classList.remove("right");
});
