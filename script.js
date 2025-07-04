document.addEventListener("DOMContentLoaded", function () {
  const hamburger = document.querySelector(".hamburger");
  const navLinks = document.querySelector(".nav-links");

  if (hamburger && navLinks) {
    hamburger.addEventListener("click", function () {
      navLinks.classList.toggle("show");
    });

    // Hide nav when a link is clicked (mobile)
    const links = document.querySelectorAll(".nav-links a");
    links.forEach(link => {
      link.addEventListener("click", () => {
        navLinks.classList.remove("show");
      });
    });
  } else {
    console.warn("Hamburger or nav-links not found");
  }
});
