
function toggleMenu() {
  const menu = document.getElementById("mobileMenu");
  if (menu.style.width === "250px") {
    menu.style.width = "0";
  } else {
    menu.style.width = "250px";
  }
}
