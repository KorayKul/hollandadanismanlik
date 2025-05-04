
// Basit scroll mesajı (örnek)
window.addEventListener('scroll', () => {
  console.log('Sayfa kaydırıldı.');
});


document.addEventListener("DOMContentLoaded", function () {
  const toggleButton = document.querySelector(".menu-toggle");
  const navLinks = document.querySelector(".nav-links");

  if (toggleButton && navLinks) {
    toggleButton.addEventListener("click", function () {
      navLinks.classList.toggle("active");
    });
  }
});
