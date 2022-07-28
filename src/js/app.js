// setup date
const date = (document.getElementById("date").innerHTML =
  new Date().getFullYear());

// setup nav
const navbar = document.getElementById("navbar");
const navBtn = document.getElementById("navbar-btn");
const navClose = document.getElementById("navbar-close");

// show nav
navBtn.addEventListener("click", () => {
  navbar.classList.add("showNavbar");
  // navbar.style.display = "block";
});

// close nav
navClose.addEventListener("click", () => {
  navbar.classList.remove("showNavbar");
  // navbar.style.display = "none";
});
