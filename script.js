const form = document.querySelector(".contact-form");

if (form) {
  form.addEventListener("submit", function(e) {
    e.preventDefault();
    alert("Hvala za povpraševanje. Obrazec bova kmalu povezala z emailom.");
  });
}

const logo = document.getElementById("site-logo");
const navbar = document.querySelector(".navbar");
const sections = document.querySelectorAll("[data-theme]");

function updateNavbarTheme() {
  let currentTheme = "dark";

  sections.forEach(section => {
    const rect = section.getBoundingClientRect();

    if (rect.top <= 90 && rect.bottom >= 90) {
      currentTheme = section.dataset.theme;
    }
  });

  if (currentTheme === "light") {
    logo.src = "images/logo-dark.png";
    navbar.classList.add("light");
  } else {
    logo.src = "images/logo-light.png";
    navbar.classList.remove("light");
  }
}

window.addEventListener("scroll", updateNavbarTheme);
window.addEventListener("load", updateNavbarTheme);