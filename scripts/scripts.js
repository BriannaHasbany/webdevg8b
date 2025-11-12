document.addEventListener("DOMContentLoaded", function () {
  // -------------------- HEADER INJECTION --------------------
  const headerHTML = `
<header id="siteHeader" class="fixed top-0 left-0 w-full z-50 bg-header-light-gradient dark:bg-header-dark-gradient shadow-md font-poppins">
  <div class="flex justify-between items-center px-6 py-4">

    <!-- Left spacer -->
    <div class="hidden md:flex md:flex-1"></div>

    <!-- Center logo/title -->
    <div class="flex items-center space-x-3 mx-auto">
      <img src="images/SkillLink.png" alt="Logo" class="w-16 h-16">
      <h1 class="text-3xl font-extrabold text-sky-600 dark:text-teal-300">SkillLink</h1>
    </div>

    <!-- Right controls -->
    <div class="flex flex-col items-end space-y-2 md:space-y-0 md:flex-row md:items-center md:space-x-4 md:flex-1 md:justify-end">
      
      <!-- Desktop font controls -->
      <div class="hidden md:flex items-center space-x-2" aria-label="Font size controls">
        <button id="decreaseFont" class="px-2 py-1 text-lg font-bold border border-sky-300 dark:border-teal-500 rounded hover:bg-sky-100 dark:hover:bg-teal-700">−</button>
        <button id="increaseFont" class="px-2 py-1 text-lg font-bold border border-sky-300 dark:border-teal-500 rounded hover:bg-sky-100 dark:hover:bg-teal-700">+</button>
      </div>

      <!-- Desktop dark mode -->
      <button id="modeToggle" class="hidden md:block text-2xl hover:text-indigo-500 dark:hover:text-teal-300">🌙</button>

      <!-- Mobile: dark mode + menu -->
      <div class="flex md:hidden items-center space-x-3">
        <button id="modeToggleMobile" class="text-2xl hover:text-indigo-500 dark:hover:text-teal-300">🌙</button>
        <button id="menu-btn" class="text-2xl dark:text-gray-100">☰</button>
      </div>
    </div>
  </div>

  <!-- Mobile font controls BELOW toggles -->
  <div class="flex md:hidden justify-center items-center space-x-2 pb-3" aria-label="Font size controls">
    <button id="decreaseFontMobile" class="px-3 py-1 text-lg font-bold border border-sky-300 dark:border-teal-500 rounded hover:bg-sky-100 dark:hover:bg-teal-700">−</button>
    <button id="increaseFontMobile" class="px-3 py-1 text-lg font-bold border border-sky-300 dark:border-teal-500 rounded hover:bg-sky-100 dark:hover:bg-teal-700">+</button>
  </div>

  <!-- Desktop Nav -->
  <nav class="hidden md:flex justify-center gap-6 md:gap-8 px-8 py-2 w-full">
    <a href="index.html" class="hover:text-sky-600 dark:hover:text-teal-400 text-gray-800 dark:text-gray-100">Home</a>
    <a href="find-mentor.html" class="hover:text-sky-600 dark:hover:text-teal-400 text-gray-800 dark:text-gray-100">Find a Mentor</a>
    <a href="skills.html" class="hover:text-sky-600 dark:hover:text-teal-400 text-gray-800 dark:text-gray-100">Skills & Goals</a>
    <a href="pricing.html" class="hover:text-sky-600 dark:hover:text-teal-400 text-gray-800 dark:text-gray-100">Pricing</a>
    <a href="about.html" class="hover:text-sky-600 dark:hover:text-teal-400 text-gray-800 dark:text-gray-100">About Us</a>

    <!-- Desktop Dropdown -->
    <div class="relative">
      <button id="desktopDropdownBtn" class="flex items-center text-gray-800 dark:text-gray-100 hover:text-sky-600 dark:hover:text-teal-400">Contact ▾</button>
      <div id="desktopDropdown" class="absolute hidden mt-2 w-48 bg-white dark:bg-gray-900 shadow-lg rounded-md">
        <a href="contact.html" class="block px-4 py-2 text-gray-800 dark:text-gray-100 hover:text-sky-600 dark:hover:text-teal-400">Contact Info</a>
        <a href="faqs.html" class="block px-4 py-2 text-gray-800 dark:text-gray-100 hover:text-sky-600 dark:hover:text-teal-400">FAQs</a>
      </div>
    </div>
  </nav>

  <!-- Mobile Menu -->
  <div id="mobile-menu" class="hidden md:hidden shadow-md border-t border-gray-200 dark:border-gray-700">
    <ul class="flex flex-col items-start py-4 space-y-1 w-full">
      <a href="index.html" class="w-full px-4 py-2 text-left text-gray-800 dark:text-gray-100 hover:text-sky-600 dark:hover:text-teal-400">Home</a>
      <a href="find-mentor.html" class="w-full px-4 py-2 text-left text-gray-800 dark:text-gray-100 hover:text-sky-600 dark:hover:text-teal-400">Find a Mentor</a>
      <a href="skills.html" class="w-full px-4 py-2 text-left text-gray-800 dark:text-gray-100 hover:text-sky-600 dark:hover:text-teal-400">Skills & Goals</a>
      <a href="pricing.html" class="w-full px-4 py-2 text-left text-gray-800 dark:text-gray-100 hover:text-sky-600 dark:hover:text-teal-400">Pricing</a>
      <a href="about.html" class="w-full px-4 py-2 text-left text-gray-800 dark:text-gray-100 hover:text-sky-600 dark:hover:text-teal-400">About Us</a>

      <!-- Mobile dropdown -->
      <button id="contactDropdownBtnMobile" class="w-full px-4 py-2 text-left text-gray-800 dark:text-gray-100 hover:text-sky-600 dark:hover:text-teal-400">Contact ▾</button>
      <div id="contactDropdownMobile" class="hidden flex flex-col w-full">
        <a href="contact.html" class="w-full px-4 py-2 text-gray-800 dark:text-gray-100 hover:text-sky-600 dark:hover:text-teal-400">Contact Info</a>
        <a href="faqs.html" class="w-full px-4 py-2 text-gray-800 dark:text-gray-100 hover:text-sky-600 dark:hover:text-teal-400">FAQs</a>
      </div>
    </ul>
  </div>
</header>
`;

  const headerContainer = document.getElementById("header");
  if (headerContainer) headerContainer.innerHTML = headerHTML;

  // -------------------- MOBILE MENU TOGGLE --------------------
  const menuBtn = document.getElementById("menu-btn");
  const mobileMenu = document.getElementById("mobile-menu");

  if (menuBtn && mobileMenu) {
    menuBtn.addEventListener("click", () => {
      mobileMenu.classList.toggle("hidden");
    });
  }

  // -------------------- MOBILE DROPDOWN TOGGLE --------------------
  const contactBtnMobile = document.getElementById("contactDropdownBtnMobile");
  const contactDropdownMobile = document.getElementById(
    "contactDropdownMobile"
  );

  if (contactBtnMobile && contactDropdownMobile) {
    contactBtnMobile.addEventListener("click", () => {
      contactDropdownMobile.classList.toggle("hidden");
    });
  }

  // -------------------- DESKTOP DROPDOWN --------------------
  const desktopBtn = document.getElementById("desktopDropdownBtn");
  const desktopDropdown = document.getElementById("desktopDropdown");

  if (desktopBtn && desktopDropdown) {
    desktopBtn.addEventListener("click", (e) => {
      e.stopPropagation();
      desktopDropdown.classList.toggle("hidden");
    });

    document.addEventListener("click", (e) => {
      if (
        !desktopBtn.contains(e.target) &&
        !desktopDropdown.contains(e.target)
      ) {
        desktopDropdown.classList.add("hidden");
      }
    });
  }

  // -------------------- DARK MODE TOGGLE --------------------
  const modeToggle = document.getElementById("modeToggle");
  const modeToggleMobile = document.getElementById("modeToggleMobile");
  const header = document.getElementById("siteHeader");

  function applyDarkMode(isDark) {
    document.documentElement.classList.toggle("dark", isDark);
    localStorage.setItem("theme", isDark ? "dark" : "light");

    // Swap header gradient
    if (header) {
      if (isDark) {
        header.classList.remove("bg-header-light-gradient");
        header.classList.add("bg-header-dark-gradient");
      } else {
        header.classList.remove("bg-header-dark-gradient");
        header.classList.add("bg-header-light-gradient");
      }
    }

    // Update icons
    const icon = isDark ? "☀️" : "🌙";
    if (modeToggle) modeToggle.textContent = icon;
    if (modeToggleMobile) modeToggleMobile.textContent = icon;
  }

  if (modeToggle) {
    modeToggle.addEventListener("click", () => {
      applyDarkMode(!document.documentElement.classList.contains("dark"));
    });
  }

  if (modeToggleMobile) {
    modeToggleMobile.addEventListener("click", () => {
      applyDarkMode(!document.documentElement.classList.contains("dark"));
    });
  }

  // -------------------- APPLY SAVED THEME --------------------
  const savedTheme = localStorage.getItem("theme");
  if (savedTheme === "dark") applyDarkMode(true);
});

tailwind.config = {
  darkMode: "class",
};

// -------------------- FOOTER INJECTION --------------------
document.addEventListener("DOMContentLoaded", function () {
  const footerHTML = `
 <footer class="bg-gray-100 dark:bg-header-dark-gradient text-gray-700 dark:text-gray-300">
    <div class="max-w-7xl mx-auto px-6 py-12 flex flex-col md:flex-row md:justify-between gap-8">
      <!-- Company Info + Contact -->
      <div class="flex flex-col space-y-2">
        <h2 class="text-2xl font-bold text-sky-600 dark:text-teal-300">SkillLink</h2>
        <p class="text-sm">Connecting mentors and learners around the world.</p>
        <div class="mt-2 space-y-1 text-sm">
          <p>Email: <a href="mailto:info@skilllink.com" class="hover:text-sky-600 dark:hover:text-teal-400">info@skilllink.com</a></p>
          <p>Phone: <a href="tel:+1234567890" class="hover:text-sky-600 dark:hover:text-teal-400">+1 (234) 567-890</a></p>
          <p>Address: 123 Startup Lane, Innovation City, USA</p>
        </div>
      </div>

      <!-- Navigation Links -->
      <div class="flex flex-col md:flex-row md:space-x-12 gap-6 text-center md:text-left">
        <div class="space-y-2">
          <h3 class="font-semibold">Explore</h3>
          <a href="index.html" class="block hover:text-sky-600 dark:hover:text-teal-400 transition">Home</a>
          <a href="find-mentor.html" class="block hover:text-sky-600 dark:hover:text-teal-400 transition">Find a Mentor</a>
          <a href="skills.html" class="block hover:text-sky-600 dark:hover:text-teal-400 transition">Skills & Goals</a>
          <a href="pricing.html" class="block hover:text-sky-600 dark:hover:text-teal-400 transition">Pricing</a>
        </div>
        <div class="space-y-2">
          <h3 class="font-semibold">Company</h3>
          <a href="about.html" class="block hover:text-sky-600 dark:hover:text-teal-400 transition">About Us</a>
          <a href="contact.html" class="block hover:text-sky-600 dark:hover:text-teal-400 transition">Contact</a>
          <a href="faqs.html" class="block hover:text-sky-600 dark:hover:text-teal-400 transition">FAQs</a>
        </div>
      </div>
    </div>

    <!-- Divider -->
    <hr class="border-gray-300 dark:border-gray-700">

    <!-- Bottom Section: Socials + Copy -->
    <div class="max-w-7xl mx-auto px-6 py-4 flex flex-col md:flex-row items-center justify-between gap-4">
      <p class="text-sm">&copy; 2025 SkillLink. All rights reserved.</p>
      <div class="flex space-x-4">
        <!-- Social Buttons -->
        <button onclick="showComingSoon()" class="hover:text-sky-600 dark:hover:text-teal-400 transition">
          <span class="sr-only">Twitter</span>
          <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M22.46 6c-.77.35-1.6.58-2.46.69a4.28 4.28 0 0 0 1.88-2.37c-.82.48-1.72.83-2.68 1.02a4.27 4.27 0 0 0-7.27 3.9A12.14 12.14 0 0 1 3.15 4.79a4.28 4.28 0 0 0 1.32 5.7 4.26 4.26 0 0 1-1.94-.54v.05a4.27 4.27 0 0 0 3.43 4.19 4.27 4.27 0 0 1-1.93.07 4.28 4.28 0 0 0 3.99 2.97A8.56 8.56 0 0 1 2 19.54 12.08 12.08 0 0 0 8.29 21c7.55 0 11.68-6.26 11.68-11.68 0-.18-.01-.36-.02-.54A8.35 8.35 0 0 0 22.46 6z"/></svg>
        </button>
        <button onclick="showComingSoon()" class="hover:text-sky-600 dark:hover:text-teal-400 transition">
          <span class="sr-only">Facebook</span>
          <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M22 12a10 10 0 1 0-11.5 9.95v-7.05h-2.1V12h2.1V9.7c0-2.07 1.23-3.22 3.12-3.22.9 0 1.85.16 1.85.16v2.03h-1.04c-1.03 0-1.35.64-1.35 1.29V12h2.3l-.37 2.9h-1.93v7.05A10 10 0 0 0 22 12"/></svg>
        </button>
        <button onclick="showComingSoon()" class="hover:text-sky-600 dark:hover:text-teal-400 transition">
          <span class="sr-only">LinkedIn</span>
          <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M4.98 3.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5zM3 9h4v12H3zM14 9c-2.21 0-4 1.79-4 4v8h4v-8c0-1.1.9-2 2-2s2 .9 2 2v8h4v-8c0-2.21-1.79-4-4-4z"/></svg>
        </button>
      </div>
    </div>

    <!-- Popup -->
    <div id="comingSoonPopup" class="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 hidden z-50">
      <div class="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg text-center max-w-xs">
        <p class="text-gray-900 dark:text-gray-100 font-semibold text-lg">Coming Soon!</p>
        <button onclick="hideComingSoon()" class="mt-4 px-4 py-2 bg-sky-600 text-white rounded hover:bg-sky-700 dark:bg-teal-500 dark:hover:bg-teal-400">Close</button>
      </div>
    </div>
  </footer>
  `;

  const footerContainer = document.getElementById("footer");
  if (footerContainer) footerContainer.innerHTML = footerHTML;
});

function showComingSoon() {
  document.getElementById("comingSoonPopup").classList.remove("hidden");
}
function hideComingSoon() {
  document.getElementById("comingSoonPopup").classList.add("hidden");
}

document.addEventListener("DOMContentLoaded", function () {
  const root = document.documentElement;

  // Load saved font size for the current session
  let currentSize = parseInt(sessionStorage.getItem("fontSize")) || 100;
  root.style.fontSize = currentSize + "%";

  function adjustFontSize(change) {
    currentSize = Math.min(Math.max(currentSize + change, 80), 150);
    root.style.fontSize = currentSize + "%";
    sessionStorage.setItem("fontSize", currentSize); // remember until tab closes
    adjustFooterSpacing();
  }

  function adjustFooterSpacing() {
    const footer = document.querySelector("footer");
    if (footer) {
      // Make sure footer isn’t cut off when font size grows
      footer.style.marginTop = currentSize > 100 ? "2rem" : "1rem";
    }
  }

  // Buttons (desktop + mobile)
  const increaseBtns = document.querySelectorAll(
    "#increaseFont, #increaseFontMobile"
  );
  const decreaseBtns = document.querySelectorAll(
    "#decreaseFont, #decreaseFontMobile"
  );

  increaseBtns.forEach((btn) =>
    btn.addEventListener("click", () => adjustFontSize(10))
  );
  decreaseBtns.forEach((btn) =>
    btn.addEventListener("click", () => adjustFontSize(-10))
  );

  adjustFooterSpacing(); // adjust on page load
});
