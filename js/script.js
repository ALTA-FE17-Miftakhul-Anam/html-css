let menuOpen = document.querySelector(".menu-wrapper");
let menu = document.querySelector(".menu");
let main = document.getElementById("main");

menuOpen.addEventListener("click", function () {
  menu.classList.toggle("active");
});

main.addEventListener("click", function () {
  menu.classList.remove("active");
});

document.querySelectorAll(".menu-link").forEach((link) => {
  if (link.href === window.location.href) {
    link.classList.add("active");
    link.setAttribute("aria-current", "page");
  }
});
