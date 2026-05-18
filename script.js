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

    if (rect.top <= 92 && rect.bottom >= 92) {
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

const menuToggle = document.getElementById("menu-toggle");
const mobileMenu = document.getElementById("mobile-menu");

if (menuToggle && mobileMenu) {
  menuToggle.addEventListener("click", () => {
    mobileMenu.classList.toggle("active");
  });

  mobileMenu.querySelectorAll("a").forEach(link => {
    link.addEventListener("click", () => {
      mobileMenu.classList.remove("active");
    });
  });
}

const slider = document.querySelector(".gallery-slider");
const gallerySection = document.querySelector(".gallery-section");

if (slider && gallerySection) {
  const prevBtn = document.createElement("button");
  prevBtn.className = "gallery-nav-btn prev";
  prevBtn.innerHTML = "‹";
  prevBtn.setAttribute("aria-label", "Prejšnja slika");

  const nextBtn = document.createElement("button");
  nextBtn.className = "gallery-nav-btn next";
  nextBtn.innerHTML = "›";
  nextBtn.setAttribute("aria-label", "Naslednja slika");

  const hint = document.createElement("div");
  hint.className = "gallery-swipe-hint";
  hint.innerHTML = "Swipe za več →";

  document.body.appendChild(prevBtn);
  document.body.appendChild(nextBtn);
  gallerySection.appendChild(hint);

  function updateGalleryControls() {
    const rect = slider.getBoundingClientRect();
    const isMobile = window.innerWidth <= 900;
    const isVisible = rect.top < window.innerHeight && rect.bottom > 0;

    if (isMobile || !isVisible) {
      prevBtn.style.display = "none";
      nextBtn.style.display = "none";
      return;
    }

    const middleY = rect.top + rect.height / 2;

    prevBtn.style.top = `${middleY}px`;
    nextBtn.style.top = `${middleY}px`;

    prevBtn.style.left = `${rect.left + 22}px`;
    nextBtn.style.left = `${rect.right - 68}px`;

    const atStart = slider.scrollLeft <= 10;
    const atEnd = slider.scrollLeft + slider.clientWidth >= slider.scrollWidth - 10;

    prevBtn.style.display = atStart ? "none" : "flex";
    nextBtn.style.display = atEnd ? "none" : "flex";
  }

  prevBtn.addEventListener("click", () => {
    slider.scrollBy({
      left: -slider.clientWidth * 0.85,
      behavior: "smooth"
    });
  });

  nextBtn.addEventListener("click", () => {
    slider.scrollBy({
      left: slider.clientWidth * 0.85,
      behavior: "smooth"
    });
  });

  slider.addEventListener("scroll", () => {
    hint.classList.add("hide");
    updateGalleryControls();
  });

  window.addEventListener("scroll", updateGalleryControls);
  window.addEventListener("resize", updateGalleryControls);
  window.addEventListener("load", updateGalleryControls);

  updateGalleryControls();
}
