document.addEventListener("DOMContentLoaded", function () {
  const hamburger = document.getElementById("hamburger");
  const navLinks = document.getElementById("nav-links");

  hamburger.addEventListener("click", function () {
    navLinks.classList.toggle("active");
    hamburger.classList.toggle("is-active");
  });

  document.querySelectorAll("#nav-links a").forEach(link => {
    link.addEventListener("click", () => {
      navLinks.classList.remove("active");
      hamburger.classList.remove("is-active");
    });
  });
});

