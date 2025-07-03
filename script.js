// script.js - Mobile Menu Toggle
document.addEventListener("DOMContentLoaded", function () {
  const hamburger = document.querySelector(".hamburger");
  const navLinks = document.querySelector(".nav-links");
  const navItems = document.querySelectorAll(".nav-links li a");

  // Toggle mobile menu
  hamburger.addEventListener("click", function () {
    navLinks.classList.toggle("show");
  });

  // Auto-close menu when a link is clicked (mobile UX)
  navItems.forEach(link => {
    link.addEventListener("click", () => {
      navLinks.classList.remove("show");
    });
  });
});
