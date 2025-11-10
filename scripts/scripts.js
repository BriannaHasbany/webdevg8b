// -------------------- TOGGLE MOBILE MENU --------------------
function toggleMenu() {
  const menu = document.getElementById("mobile-menu");
  const btn = document.querySelector('[aria-controls="mobile-menu"]');

  const isShown = !menu.classList.contains("hidden");

  menu.classList.toggle("hidden"); // show/hide menu
  menu.setAttribute("aria-hidden", isShown ? "true" : "false");
  btn.setAttribute("aria-expanded", isShown ? "false" : "true");
}

// -------------------- TOGGLE DARK MODE --------------------
function toggleDarkMode() {
  const html = document.documentElement; // Tailwind recommends toggling <html>
  const isDark = html.classList.toggle("dark"); // Tailwind 'dark' class

  const btnDesktop = document.getElementById("modeToggle");
  const btnMobile = document.getElementById("modeToggleMobile");

  if (btnDesktop) btnDesktop.textContent = isDark ? "☀️" : "🌙";
  if (btnMobile) btnMobile.textContent = isDark ? "☀️" : "🌙";

  localStorage.setItem("darkMode", isDark ? "true" : "false");
}

// -------------------- APPLY SAVED DARK MODE ON LOAD --------------------
document.addEventListener("DOMContentLoaded", function () {
  const darkMode = localStorage.getItem("darkMode");
  const html = document.documentElement;

  if (darkMode === "true") {
    html.classList.add("dark");

    const btnDesktop = document.getElementById("modeToggle");
    const btnMobile = document.getElementById("modeToggleMobile");

    if (btnDesktop) btnDesktop.textContent = "☀️";
    if (btnMobile) btnMobile.textContent = "☀️";
  }
});


// -------------------- HEADER INJECTION --------------------
document.addEventListener("DOMContentLoaded", function () {
  const headerHTML = `
   
  `;

  const headerContainer = document.getElementById("header");
  if (headerContainer) headerContainer.innerHTML = headerHTML;
});

// -------------------- FOOTER INJECTION --------------------
document.addEventListener("DOMContentLoaded", function () {
  const footerHTML = `
 
  `;

  const footerContainer = document.getElementById("footer");
  if (footerContainer) footerContainer.innerHTML = footerHTML;
});
