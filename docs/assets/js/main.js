const menuButton = document.querySelector("[data-menu-button]");
const navMenu = document.querySelector("[data-nav-menu]");

if (menuButton && navMenu) {
  const closeMenu = () => {
    navMenu.classList.remove("open");
    menuButton.setAttribute("aria-expanded", "false");
  };

  menuButton.addEventListener("click", () => {
    const open = navMenu.classList.toggle("open");
    menuButton.setAttribute("aria-expanded", String(open));
  });

  navMenu.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", closeMenu);
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") closeMenu();
  });

  document.addEventListener("click", (event) => {
    if (!navMenu.classList.contains("open")) return;
    if (navMenu.contains(event.target) || menuButton.contains(event.target)) return;
    closeMenu();
  });
}
