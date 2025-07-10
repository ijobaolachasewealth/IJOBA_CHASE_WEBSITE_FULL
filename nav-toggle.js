document.addEventListener("DOMContentLoaded", function () {
  const hamburger = document.getElementById("hamburger");
  const navLinks = document.getElementById("nav-links");
  const overlay = document.getElementById("nav-overlay");

  hamburger.addEventListener("click", function () {
    navLinks.classList.toggle("active");
    hamburger.classList.toggle("is-active");
    overlay.classList.toggle("active"); // NEW
  });

  document.querySelectorAll("#nav-links a").forEach(link => {
    link.addEventListener("click", () => {
      navLinks.classList.remove("active");
      hamburger.classList.remove("is-active");
      overlay.classList.remove("active"); // NEW
    });
  });

  overlay.addEventListener("click", () => {
    navLinks.classList.remove("active");
    hamburger.classList.remove("is-active");
    overlay.classList.remove("active");
  });
});
