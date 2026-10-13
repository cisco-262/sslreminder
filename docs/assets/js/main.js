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

const screenshotTabs = [...document.querySelectorAll('[data-screenshot-tab]')];
const screenshotPanels = [...document.querySelectorAll('[data-screenshot-panel]')];
function selectScreenshot(tab, focus = false) {
  screenshotTabs.forEach((item) => {
    const selected = item === tab;
    item.setAttribute('aria-selected', String(selected));
    item.tabIndex = selected ? 0 : -1;
  });
  screenshotPanels.forEach((panel) => { panel.hidden = panel.dataset.screenshotPanel !== tab.dataset.screenshotTab; });
  if (focus) tab.focus();
}
screenshotTabs.forEach((tab, index) => {
  tab.tabIndex = index === 0 ? 0 : -1;
  tab.addEventListener('click', () => selectScreenshot(tab));
  tab.addEventListener('keydown', (event) => {
    let next = null;
    if (event.key === 'ArrowRight') next = screenshotTabs[(index + 1) % screenshotTabs.length];
    if (event.key === 'ArrowLeft') next = screenshotTabs[(index + screenshotTabs.length - 1) % screenshotTabs.length];
    if (event.key === 'Home') next = screenshotTabs[0];
    if (event.key === 'End') next = screenshotTabs.at(-1);
    if (next) { event.preventDefault(); selectScreenshot(next, true); }
  });
});
