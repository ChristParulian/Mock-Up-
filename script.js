// script.js
document.addEventListener("DOMContentLoaded", () => {
  const menuToggle = document.getElementById("menu-toggle");
  const mobileMenu = document.getElementById("mobile-menu");
  const closeMenu = document.getElementById("close-menu");

  menuToggle.addEventListener("click", () => {
    mobileMenu.classList.remove("-translate-x-full");
  });

  closeMenu.addEventListener("click", () => {
    mobileMenu.classList.add("-translate-x-full");
  });
});

// script.js
document.getElementById('scan-btn').addEventListener('click', function () {
  const result = document.getElementById('scan-result');
  result.classList.remove('hidden');
});
