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
    <a href="skills.html" class="hover:text-sky-600 dark:hover:text-teal-400 text-gray-800 dark:text-gray-100">Skills & Courses</a>
    <a href="pricing.html" class="hover:text-sky-600 dark:hover:text-teal-400 text-gray-800 dark:text-gray-100">Pricing</a>
    <a href="about.html" class="hover:text-sky-600 dark:hover:text-teal-400 text-gray-800 dark:text-gray-100">About Us</a>
    <a href="dashboard.html" class="hover:text-sky-600 dark:hover:text-teal-400 text-gray-800 dark:text-gray-100">Dashboard Simulation</a>
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
      <a href="skills.html" class="w-full px-4 py-2 text-left text-gray-800 dark:text-gray-100 hover:text-sky-600 dark:hover:text-teal-400">Skills & Courses</a>
      <a href="pricing.html" class="w-full px-4 py-2 text-left text-gray-800 dark:text-gray-100 hover:text-sky-600 dark:hover:text-teal-400">Pricing</a>
      <a href="about.html" class="w-full px-4 py-2 text-left text-gray-800 dark:text-gray-100 hover:text-sky-600 dark:hover:text-teal-400">About Us</a>
      <a href="dashboard.html" class="w-full px-4 py-2 text-left text-gray-800 dark:text-gray-100 hover:text-sky-600 dark:hover:text-teal-400">Dashboard Simulation</a>
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
    menuBtn.addEventListener("click", () =>
      mobileMenu.classList.toggle("hidden")
    );
  }

  // -------------------- MOBILE DROPDOWN --------------------
  const contactBtnMobile = document.getElementById("contactDropdownBtnMobile");
  const contactDropdownMobile = document.getElementById(
    "contactDropdownMobile"
  );
  if (contactBtnMobile && contactDropdownMobile) {
    contactBtnMobile.addEventListener("click", () =>
      contactDropdownMobile.classList.toggle("hidden")
    );
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

  // -------------------- DARK MODE --------------------
  const modeToggle = document.getElementById("modeToggle");
  const modeToggleMobile = document.getElementById("modeToggleMobile");
  const header = document.getElementById("siteHeader");

  function applyDarkMode(isDark) {
    document.documentElement.classList.toggle("dark", isDark);
    localStorage.setItem("theme", isDark ? "dark" : "light");
    if (header) {
      header.classList.toggle("bg-header-dark-gradient", isDark);
      header.classList.toggle("bg-header-light-gradient", !isDark);
    }
    const icon = isDark ? "☀️" : "🌙";
    if (modeToggle) modeToggle.textContent = icon;
    if (modeToggleMobile) modeToggleMobile.textContent = icon;
  }

  if (modeToggle)
    modeToggle.addEventListener("click", () =>
      applyDarkMode(!document.documentElement.classList.contains("dark"))
    );
  if (modeToggleMobile)
    modeToggleMobile.addEventListener("click", () =>
      applyDarkMode(!document.documentElement.classList.contains("dark"))
    );

  // Apply saved theme
  const savedTheme = localStorage.getItem("theme");
  if (savedTheme === "dark") applyDarkMode(true);

  // -------------------- FOOTER INJECTION --------------------
  const footerHTML = `
<footer class="bg-gray-100 dark:bg-header-dark-gradient text-gray-700 dark:text-gray-300">
  <div class="max-w-7xl mx-auto px-6 py-12 flex flex-col md:flex-row md:justify-between gap-8">
    <div class="flex flex-col space-y-2">
      <h2 class="text-2xl font-bold text-sky-600 dark:text-teal-300">SkillLink</h2>
      <p class="text-sm">Connecting mentors and learners around the world.</p>
      <div class="mt-2 space-y-1 text-sm">
        <p>Email: <a href="mailto:info@skilllink.com" class="hover:text-sky-600 dark:hover:text-teal-400">info@skilllink.com</a></p>
        <p>Phone: <a href="tel:+1234567890" class="hover:text-sky-600 dark:hover:text-teal-400">+1 (234) 567-8900</a></p>
        <p>Address: 315 Turnpike St, North Andover, MA 01845</p>
      </div>
    </div>
    <div class="flex flex-col md:flex-row md:space-x-12 gap-6 text-center md:text-left">
      <div class="space-y-2">
        <h3 class="font-semibold">Explore</h3>
        <a href="index.html" class="block hover:text-sky-600 dark:hover:text-teal-400 transition">Home</a>
        <a href="find-mentor.html" class="block hover:text-sky-600 dark:hover:text-teal-400 transition">Find a Mentor</a>
        <a href="skills.html" class="block hover:text-sky-600 dark:hover:text-teal-400 transition">Skills & Courses</a>
        <a href="pricing.html" class="block hover:text-sky-600 dark:hover:text-teal-400 transition">Pricing</a>
        <a href="dashboard.html" class="block hover:text-sky-600 dark:hover:text-teal-400 transition">Dashboard Simulation</a>
      </div>
      <div class="space-y-2">
        <h3 class="font-semibold">Company</h3>
        <a href="about.html" class="block hover:text-sky-600 dark:hover:text-teal-400 transition">About Us</a>
        <a href="contact.html" class="block hover:text-sky-600 dark:hover:text-teal-400 transition">Contact</a>
        <a href="faqs.html" class="block hover:text-sky-600 dark:hover:text-teal-400 transition">FAQs</a>
      </div>
    </div>
  </div>
  <hr class="border-gray-300 dark:border-gray-700">
  <!-- Bottom Section: Socials + Copy -->
<div class="max-w-7xl mx-auto px-6 py-4 flex flex-col md:flex-row items-center justify-between gap-4">
  <p class="text-sm">&copy; 2025 SkillLink. All rights reserved.</p>
  <div class="flex space-x-4">
    <!-- Twitter -->
    <button onclick="showComingSoon()" class="hover:text-sky-600 dark:hover:text-teal-400 transition">
      <span class="sr-only">Twitter</span>
      <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
        <path d="M22.46 6c-.77.35-1.6.58-2.46.69a4.28 4.28 0 0 0 1.88-2.37c-.82.48-1.72.83-2.68 1.02a4.27 4.27 0 0 0-7.27 3.9A12.14 12.14 0 0 1 3.15 4.79a4.28 4.28 0 0 0 1.32 5.7 4.26 4.26 0 0 1-1.94-.54v.05a4.27 4.27 0 0 0 3.43 4.19 4.27 4.27 0 0 1-1.93.07 4.28 4.28 0 0 0 3.99 2.97A8.56 8.56 0 0 1 2 19.54 12.08 12.08 0 0 0 8.29 21c7.55 0 11.68-6.26 11.68-11.68 0-.18-.01-.36-.02-.54A8.35 8.35 0 0 0 22.46 6z"/>
      </svg>
    </button>
    <!-- Facebook -->
    <button onclick="showComingSoon()" class="hover:text-sky-600 dark:hover:text-teal-400 transition">
      <span class="sr-only">Facebook</span>
      <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
        <path d="M22 12a10 10 0 1 0-11.5 9.95v-7.05h-2.1V12h2.1V9.7c0-2.07 1.23-3.22 3.12-3.22.9 0 1.85.16 1.85.16v2.03h-1.04c-1.03 0-1.35.64-1.35 1.29V12h2.3l-.37 2.9h-1.93v7.05A10 10 0 0 0 22 12"/>
      </svg>
    </button>
    <!-- LinkedIn -->
    <button onclick="showComingSoon()" class="hover:text-sky-600 dark:hover:text-teal-400 transition">
      <span class="sr-only">LinkedIn</span>
      <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
        <path d="M4.98 3.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5zM3 9h4v12H3zM14 9c-2.21 0-4 1.79-4 4v8h4v-8c0-1.1.9-2 2-2s2 .9 2 2v8h4v-8c0-2.21-1.79-4-4-4z"/>
      </svg>
    </button>
  </div>
</div>

<!-- Modal -->
<div id="comingSoonPopup" class="fixed inset-0 hidden items-center justify-center bg-black bg-opacity-50 z-50">
  <div class="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg text-center max-w-xs">
    <p class="text-gray-900 dark:text-gray-100 font-semibold text-lg">Coming Soon!</p>
    <button onclick="hideComingSoon()" class="mt-4 px-4 py-2 bg-sky-600 text-white rounded hover:bg-sky-700 dark:bg-teal-500 dark:hover:bg-teal-400">Close</button>
  </div>
</div>

</footer>
`;

  const footerContainer = document.getElementById("footer");
  if (footerContainer) footerContainer.innerHTML = footerHTML;

  // -------------------- MODAL --------------------
  window.showComingSoon = function () {
    const popup = document.getElementById("comingSoonPopup");
    if (popup) {
      popup.classList.remove("hidden");
      popup.classList.add("flex");
    }
  };
  window.hideComingSoon = function () {
    const popup = document.getElementById("comingSoonPopup");
    if (popup) {
      popup.classList.add("hidden");
      popup.classList.remove("flex");
    }
  };

  // -------------------- FONT SIZE --------------------
  const root = document.documentElement;
  let currentSize = parseInt(sessionStorage.getItem("fontSize")) || 100;
  root.style.fontSize = currentSize + "%";

  function adjustFontSize(change) {
    currentSize = Math.min(Math.max(currentSize + change, 80), 150);
    root.style.fontSize = currentSize + "%";
    sessionStorage.setItem("fontSize", currentSize);
    adjustFooterSpacing();
  }

  function adjustFooterSpacing() {
    const footer = document.querySelector("footer");
    if (footer) footer.style.marginTop = currentSize > 100 ? "2rem" : "1rem";
  }

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
  adjustFooterSpacing();

  // -------------------- TAGLINE ANIMATION --------------------
  const taglineSection = document.getElementById("tagline");
  if (taglineSection) {
    const words = document.querySelectorAll(".slide-word");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            taglineSection.classList.add("show");
            words.forEach((word) => word.classList.add("show"));
            observer.unobserve(taglineSection);
          }
        });
      },
      { threshold: 0.5 }
    );
    observer.observe(taglineSection);
  }

  // -------------------- SKILLS PAGE DYNAMICS --------------------
  // === DATA ===
  const featuredCourses = [
    {
      title: "Advanced Python",
      icon: "fa-brands fa-python",
      desc: "Deep dive into Python programming and advanced concepts.",
      link: "pricing.html",
    },
    {
      title: "Machine Learning Pro",
      icon: "fa-solid fa-robot",
      desc: "Learn advanced machine learning techniques and projects.",
      link: "pricing.html",
    },
    {
      title: "Creative Design Mastery",
      icon: "fa-solid fa-palette",
      desc: "Become a pro in graphic design and creative projects.",
      link: "pricing.html",
    },
  ];

  const coursesData = [
    {
      id: "programming",
      title: "Programming",
      courses: [
        {
          title: "Python Fundamentals",
          icon: "fa-brands fa-python",
          desc: "Learn Python from scratch.",
          link: "pricing.html",
        },
        {
          title: "JavaScript Essentials",
          icon: "fa-brands fa-js",
          desc: "Understand JS basics.",
          link: "pricing.html",
        },
        {
          title: "Intro to C++",
          icon: "fa-solid fa-code",
          desc: "Beginner C++ course.",
          link: "pricing.html",
        },
        {
          title: "Java Programming",
          icon: "fa-brands fa-java",
          desc: "Learn core Java concepts.",
          link: "pricing.html",
        },
        {
          title: "PHP Basics",
          icon: "fa-brands fa-php",
          desc: "Server-side scripting fundamentals.",
          link: "pricing.html",
        },
        {
          title: "Node.js Essentials",
          icon: "fa-brands fa-node",
          desc: "Backend JavaScript fundamentals.",
          link: "pricing.html",
        },
      ],
    },
    {
      id: "data-analytics",
      title: "Data & Analytics",
      courses: [
        {
          title: "Data Science Starter",
          icon: "fa-solid fa-database",
          desc: "Intro to data science.",
          link: "pricing.html",
        },
        {
          title: "SQL for Beginners",
          icon: "fa-solid fa-table",
          desc: "Learn SQL queries.",
          link: "pricing.html",
        },
        {
          title: "Excel for Data Analysis",
          icon: "fa-solid fa-chart-line",
          desc: "Analyze data with Excel.",
          link: "pricing.html",
        },
        {
          title: "Machine Learning Basics",
          icon: "fa-solid fa-robot",
          desc: "ML fundamentals.",
          link: "pricing.html",
        },
        {
          title: "Data Visualization",
          icon: "fa-solid fa-chart-pie",
          desc: "Visualize data effectively.",
          link: "pricing.html",
        },
        {
          title: "Power BI Essentials",
          icon: "fa-solid fa-chart-bar",
          desc: "Build interactive dashboards.",
          link: "pricing.html",
        },
      ],
    },
    {
      id: "creative-arts",
      title: "Creative Arts & Design",
      courses: [
        {
          title: "Graphic Design Basics",
          icon: "fa-solid fa-paintbrush",
          desc: "Intro to digital design principles.",
          link: "pricing.html",
        },
        {
          title: "Photography Essentials",
          icon: "fa-solid fa-camera-retro",
          desc: "Learn photography techniques.",
          link: "pricing.html",
        },
        {
          title: "UX/UI Design",
          icon: "fa-solid fa-pencil-ruler",
          desc: "Design intuitive interfaces.",
          link: "pricing.html",
        },
        {
          title: "Music Production",
          icon: "fa-solid fa-music",
          desc: "Create and mix your own music.",
          link: "pricing.html",
        },
        {
          title: "Video Editing",
          icon: "fa-solid fa-video",
          desc: "Edit videos like a pro.",
          link: "pricing.html",
        },
        {
          title: "3D Design & Animation",
          icon: "fa-solid fa-drafting-compass",
          desc: "Create 3D models and animations.",
          link: "pricing.html",
        },
      ],
    },
    {
      id: "professional-skills",
      title: "Professional Skills",
      courses: [
        {
          title: "Project Management",
          icon: "fa-solid fa-briefcase",
          desc: "Master planning & execution.",
          link: "pricing.html",
        },
        {
          title: "Negotiation Skills",
          icon: "fa-solid fa-handshake",
          desc: "Improve your persuasion skills.",
          link: "pricing.html",
        },
        {
          title: "Business Analytics",
          icon: "fa-solid fa-chart-line",
          desc: "Analyze business trends.",
          link: "pricing.html",
        },
        {
          title: "Leadership Skills",
          icon: "fa-solid fa-lightbulb",
          desc: "Lead teams effectively.",
          link: "pricing.html",
        },
        {
          title: "Time Management",
          icon: "fa-solid fa-clock",
          desc: "Boost productivity and efficiency.",
          link: "pricing.html",
        },
        {
          title: "Team Collaboration",
          icon: "fa-solid fa-users",
          desc: "Improve teamwork and communication.",
          link: "pricing.html",
        },
      ],
    },
    {
      id: "communication",
      title: "Communication",
      courses: [
        {
          title: "Public Speaking",
          icon: "fa-solid fa-microphone",
          desc: "Speak confidently in front of audiences.",
          link: "pricing.html",
        },
        {
          title: "Effective Writing",
          icon: "fa-solid fa-comment-dots",
          desc: "Write clearly and persuasively.",
          link: "pricing.html",
        },
        {
          title: "Interpersonal Communication",
          icon: "fa-solid fa-comments",
          desc: "Build strong relationships.",
          link: "pricing.html",
        },
        {
          title: "Negotiation Communication",
          icon: "fa-solid fa-handshake-angle",
          desc: "Negotiate effectively in any scenario.",
          link: "pricing.html",
        },
        {
          title: "Customer Communication",
          icon: "fa-solid fa-headset",
          desc: "Professional client interactions.",
          link: "pricing.html",
        },
        {
          title: "Conflict Resolution",
          icon: "fa-solid fa-comment",
          desc: "Resolve disagreements effectively.",
          link: "pricing.html",
        },
      ],
    },
  ];

  // === BUILD FEATURED COURSES ===
  const featuredContainer = document.getElementById("featured-courses");
  if (featuredContainer) {
    featuredContainer.innerHTML = featuredCourses
      .map(
        (course) => `
      <div class="bg-indigo-50 dark:bg-gray-700 shadow-lg rounded-xl p-6 flex flex-col items-center text-center hover:shadow-2xl transition">
        <i class="${course.icon} text-5xl text-indigo-600 mb-4"></i>
        <h3 class="text-2xl font-bold text-indigo-700 dark:text-indigo-200">${course.title}</h3>
        <p class="text-gray-700 dark:text-gray-300 mt-2 text-center">${course.desc}</p>
        <a href="${course.link}" class="mt-4 px-6 py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition">View Course</a>
      </div>
    `
      )
      .join("");
  }

  // === BUILD COURSES SECTIONS ===
  const coursesContainer = document.getElementById("courses-container");
  if (coursesContainer) {
    coursesData.forEach((section) => {
      const sectionEl = document.createElement("section");
      sectionEl.id = section.id;
      sectionEl.className = "py-6";

      sectionEl.innerHTML = `
        <button class="w-full text-left flex justify-between items-center bg-indigo-100 dark:bg-gray-700 p-4 rounded-lg mb-4 hover:bg-indigo-200 dark:hover:bg-gray-600 transition" onclick="this.nextElementSibling.classList.toggle('hidden')">
          <h2 class="text-2xl font-bold text-indigo-700 dark:text-indigo-300">${
            section.title
          }</h2>
          <i class="fa-solid fa-chevron-down text-indigo-700 dark:text-indigo-300"></i>
        </button>
        <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 hidden">
          ${section.courses
            .map(
              (course) => `
            <div class="bg-white dark:bg-gray-800 shadow-md rounded-xl p-5 flex flex-col items-center text-center hover:shadow-xl transition">
              <i class="${course.icon} text-4xl text-indigo-500 mb-3"></i>
              <h3 class="text-xl font-bold text-indigo-600 dark:text-indigo-300">${course.title}</h3>
              <p class="text-gray-600 dark:text-gray-300 mt-2">${course.desc}</p>
              <a href="${course.link}" class="mt-4 px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition">View Course</a>
            </div>
          `
            )
            .join("")}
        </div>
      `;

      coursesContainer.appendChild(sectionEl);
    });
  }

  // -------------------- DASHBOARD CALENDAR --------------------

  // HTML for calendar section
  const calendarHTML = `
<section id="calendar">
  <div class="flex items-center justify-between mb-4">
    <h2 class="text-3xl font-bold text-indigo-700 dark:text-indigo-300">Calendar & Meetings</h2>
    <button id="addMeetingBtn" class="w-10 h-10 bg-indigo-600 text-white rounded-full text-2xl flex items-center justify-center hover:bg-indigo-700">+</button>
  </div>
  <div class="bg-white dark:bg-gray-800 shadow-md rounded-xl p-6 overflow-x-auto">
    <table class="w-full border-collapse text-left">
      <thead>
        <tr class="border-b border-gray-300 dark:border-gray-600">
          <th class="py-2 px-3">Date</th>
          <th class="py-2 px-3">Time</th>
          <th class="py-2 px-3">Meeting</th>
          <th class="py-2 px-3">Hosts</th>
        </tr>
      </thead>
      <tbody id="meetingTableBody">
        <tr class="border-b border-gray-200 dark:border-gray-600">
          <td class="py-2 px-3">2025-11-18</td>
          <td class="py-2 px-3">10:00 AM</td>
          <td class="py-2 px-3">Mentor Meeting: John Smith</td>
          <td class="py-2 px-3">John Smith</td>
        </tr>
        <tr class="border-b border-gray-200 dark:border-gray-600">
          <td class="py-2 px-3">2025-11-19</td>
          <td class="py-2 px-3">2:00 PM</td>
          <td class="py-2 px-3">Excel 101 Workshop</td>
          <td class="py-2 px-3">Tara Brown, Jane Lowe</td>
        </tr>
      </tbody>
    </table>
  </div>

  <!-- Meeting Modal -->
  <div id="meetingModal" class="hidden fixed inset-0 z-50 bg-black bg-opacity-40 flex items-center justify-center">
  <div class="bg-white dark:bg-gray-800 p-6 rounded-xl w-full max-w-lg shadow-lg">
    <h3 class="text-xl font-bold mb-4 text-indigo-600">Add Meeting</h3>
    <div class="grid grid-cols-1 gap-3">
      <div>
        <label class="block text-sm mb-1">Date</label>
        <input type="date" id="meetingDate" class="w-full p-2 rounded bg-gray-100 dark:bg-gray-700"/>
      </div>
      <div>
        <label class="block text-sm mb-1">Time</label>
        <input type="time" id="meetingTime" class="w-full p-2 rounded bg-gray-100 dark:bg-gray-700"/>
      </div>
      <div>
        <label class="block text-sm mb-1">Meeting Title</label>
        <input type="text" id="meetingTitle" class="w-full p-2 rounded bg-gray-100 dark:bg-gray-700"/>
      </div>
      <div>
        <label class="block text-sm mb-1">Hosts</label>
        <input type="text" id="meetingHosts" class="w-full p-2 rounded bg-gray-100 dark:bg-gray-700" placeholder="Enter names or emails"/>
      </div>
    </div>
    <div class="flex justify-end gap-3 mt-4">
      <button id="closeModal" class="px-4 py-2 bg-gray-500 text-white rounded-lg">Cancel</button>
      <button id="saveMeeting" class="px-4 py-2 bg-indigo-600 text-white rounded-lg">Add</button>
    </div>
  </div>
</div>
</section>
`;

  // Only run if calendarContainer exists
const calendarContainer = document.getElementById("calendarContainer");
if (calendarContainer) {
  calendarContainer.innerHTML = calendarHTML;

  const addMeetingBtn = document.getElementById("addMeetingBtn");
  const meetingModal = document.getElementById("meetingModal");
  const closeModalBtn = document.getElementById("closeModal");
  const saveMeetingBtn = document.getElementById("saveMeeting");

  // Match table columns: Date, Time, Meeting, Hosts
  const meetingDate = document.getElementById("meetingDate");
  const meetingTime = document.getElementById("meetingTime");
  const meetingTitle = document.getElementById("meetingTitle"); // rename to match "Meeting"
  const meetingHost = document.getElementById("meetingHosts"); // rename to match "Hosts"

  const meetingTableBody = document.getElementById("meetingTableBody");

  // Show/Hide modal
  window.showMeetingModal = function () {
    meetingModal.classList.remove("hidden");
    meetingModal.classList.add("flex");
  };

  window.hideMeetingModal = function () {
    meetingModal.classList.add("hidden");
    meetingModal.classList.remove("flex");
  };

  addMeetingBtn.addEventListener("click", showMeetingModal);
  closeModalBtn.addEventListener("click", hideMeetingModal);

  // Save new meeting
  saveMeetingBtn.addEventListener("click", () => {
    if (!meetingDate.value || !meetingTime.value || !meetingTitle.value || !meetingHost.value) {
      alert("Please fill out all fields!");
      return;
    }

    const newRow = document.createElement("tr");
    newRow.className = "border-b border-gray-200 dark:border-gray-600";
    newRow.innerHTML = `
      <td class="py-2 px-3">${meetingDate.value}</td>
      <td class="py-2 px-3">${meetingTime.value}</td>
      <td class="py-2 px-3">${meetingTitle.value}</td>
      <td class="py-2 px-3">${meetingHost.value}</td>
    `;
    meetingTableBody.appendChild(newRow);

    // Clear inputs
    meetingDate.value = "";
    meetingTime.value = "";
    meetingTitle.value = "";
    meetingHost.value = "";

    hideMeetingModal();

    // Alert about simulation
    alert("This is a simulation. To keep planning meetings, please choose a subscription plan.");
  });
}

// --------------- MENTORS SECTION ------------------

const mentorsHTML = `
<section id="mentors">
  <h2 class="text-3xl font-bold text-indigo-700 dark:text-indigo-300 mb-6">Current Mentors</h2>
  <div id="mentorsGrid" class="grid sm:grid-cols-2 md:grid-cols-4 gap-6"></div>

  <!-- Schedule Meeting Modal -->
  <div id="mentorModal" class="hidden fixed inset-0 z-50 bg-black bg-opacity-40 flex items-center justify-center">
    <div class="bg-white dark:bg-gray-800 p-6 rounded-xl w-full max-w-lg shadow-lg">
      <h3 class="text-xl font-bold mb-4 text-indigo-600">Schedule a Meeting</h3>
      <div class="grid grid-cols-1 gap-3">
        <input type="text" id="firstName" placeholder="First Name" class="w-full p-2 rounded bg-gray-100 dark:bg-gray-700"/>
        <input type="text" id="lastName" placeholder="Last Name" class="w-full p-2 rounded bg-gray-100 dark:bg-gray-700"/>
        <input type="email" id="email" placeholder="Email" class="w-full p-2 rounded bg-gray-100 dark:bg-gray-700"/>
        <input type="date" id="meetingDate" class="w-full p-2 rounded bg-gray-100 dark:bg-gray-700"/>
        <input type="time" id="meetingTime" class="w-full p-2 rounded bg-gray-100 dark:bg-gray-700"/>
        <input type="text" id="meetingReason" placeholder="Reason for Meeting" class="w-full p-2 rounded bg-gray-100 dark:bg-gray-700"/>
      </div>
      <div class="flex justify-end gap-3 mt-4">
        <button id="closeMentorModal" class="px-4 py-2 bg-gray-500 text-white rounded-lg">Close</button>
        <button id="requestMeeting" class="px-4 py-2 bg-indigo-600 text-white rounded-lg">Request</button>
      </div>
    </div>
  </div>
</section>
`;

const mentorsContainer = document.getElementById("mentorsContainer");
if (mentorsContainer) {
  mentorsContainer.innerHTML = mentorsHTML;

 const mentors = [
  { initials: "JS", name: "John Smith", title: "Brand Manager at Nike" },
  { initials: "AK", name: "Alice Kim", title: "Digital Marketing Lead at Spotify" },
  { initials: "LM", name: "Liam Moore", title: "Content Strategist at HubSpot" },
  { initials: "TB", name: "Tara Brown", title: "Marketing Analyst at Coca-Cola" },
];

  const mentorsGrid = document.getElementById("mentorsGrid");
  mentors.forEach((mentor, index) => {
    const mentorCard = document.createElement("div");
    mentorCard.className = "flex flex-col items-center gap-2 bg-gray-100 dark:bg-gray-700 p-4 rounded-xl shadow";
    mentorCard.innerHTML = `
      <div class="w-16 h-16 rounded-full bg-indigo-500 flex items-center justify-center text-white text-xl font-bold">${mentor.initials}</div>
      <p class="font-semibold text-gray-800 dark:text-gray-200">${mentor.name}</p>
      <p class="text-gray-500 dark:text-gray-400 text-sm">${mentor.title}</p>
      <button class="mt-2 px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 scheduleBtn">Schedule Meeting</button>
    `;
    mentorsGrid.appendChild(mentorCard);
  });

  // Modal functionality
  const mentorModal = document.getElementById("mentorModal");
  const closeMentorModal = document.getElementById("closeMentorModal");
  const requestMeeting = document.getElementById("requestMeeting");

  const firstName = document.getElementById("firstName");
  const lastName = document.getElementById("lastName");
  const email = document.getElementById("email");
  const meetingDate = document.getElementById("meetingDate");
  const meetingTime = document.getElementById("meetingTime");
  const meetingReason = document.getElementById("meetingReason");

  // Open modal for any mentor
  document.querySelectorAll(".scheduleBtn").forEach((btn) => {
    btn.addEventListener("click", () => {
      mentorModal.classList.remove("hidden");
      mentorModal.classList.add("flex");
    });
  });

  closeMentorModal.addEventListener("click", () => {
    mentorModal.classList.add("hidden");
    mentorModal.classList.remove("flex");
  });

  requestMeeting.addEventListener("click", () => {
    if (!firstName.value || !lastName.value || !email.value || !meetingDate.value || !meetingTime.value || !meetingReason.value) {
      alert("Please fill out all fields!");
      return;
    }

    // Clear inputs after request
    firstName.value = "";
    lastName.value = "";
    email.value = "";
    meetingDate.value = "";
    meetingTime.value = "";
    meetingReason.value = "";

    mentorModal.classList.add("hidden");
    mentorModal.classList.remove("flex");

    alert("This is a simulation. To schedule actual meetings, please choose a subscription plan.");
  });
}

// -------------------- DASHBOARD SECTIONS --------------------

const dashboardSectionsHTML = `
<!-- Goals Section -->
<section id="goals" class="mb-8">
  <h2 class="text-3xl font-bold text-indigo-700 dark:text-indigo-300 mb-4 flex justify-between items-center">
    Goals
    <button id="addGoalBtn" class="px-4 py-2 bg-indigo-600 text-white rounded-lg text-sm hover:bg-indigo-700">Add Goal</button>
  </h2>
  <ul id="goalsList" class="space-y-3">
    <li class="bg-gray-100 dark:bg-gray-700 p-4 rounded-lg shadow flex justify-between items-center">
      <span>Increase LinkedIn followers by 500</span>
      <span class="text-sm text-gray-500 dark:text-gray-400">50% complete</span>
    </li>
    <li class="bg-gray-100 dark:bg-gray-700 p-4 rounded-lg shadow flex justify-between items-center">
      <span>Launch marketing campaign for new product</span>
      <span class="text-sm text-gray-500 dark:text-gray-400">30% complete</span>
    </li>
  </ul>
</section>

<!-- Current Tasks Section -->
<section id="tasks" class="mb-8">
  <h2 class="text-3xl font-bold text-indigo-700 dark:text-indigo-300 mb-4 flex justify-between items-center">
    Current Tasks
    <button id="addTaskBtn" class="px-4 py-2 bg-indigo-600 text-white rounded-lg text-sm hover:bg-indigo-700">Add Task</button>
  </h2>
  <ul id="tasksList" class="space-y-3">
    <li class="bg-gray-100 dark:bg-gray-700 p-4 rounded-lg shadow flex justify-between items-center">
      <span>Create social media content calendar</span>
      <span class="text-sm text-gray-500 dark:text-gray-400">Due: Nov 20</span>
    </li>
    <li class="bg-gray-100 dark:bg-gray-700 p-4 rounded-lg shadow flex justify-between items-center">
      <span>Analyze email campaign metrics</span>
      <span class="text-sm text-gray-500 dark:text-gray-400">Due: Nov 22</span>
    </li>
  </ul>
</section>

<!-- Achievements Section -->
<section id="achievements" class="mb-8">
  <h2 class="text-3xl font-bold text-indigo-700 dark:text-indigo-300 mb-4">Achievements</h2>
  <div class="grid sm:grid-cols-2 md:grid-cols-4 gap-6">
    <div class="flex flex-col items-center gap-2 bg-indigo-50 dark:bg-indigo-900 p-4 rounded-xl shadow hover:scale-105 transition transform">
      <div class="w-16 h-16 flex items-center justify-center bg-indigo-600 text-white text-3xl rounded-full">
        <i class="fas fa-award"></i>
      </div>
      <p class="font-semibold text-gray-800 dark:text-gray-200 text-center mt-2">Certified Digital Marketer</p>
    </div>

    <div class="flex flex-col items-center gap-2 bg-green-50 dark:bg-green-900 p-4 rounded-xl shadow hover:scale-105 transition transform">
      <div class="w-16 h-16 flex items-center justify-center bg-green-600 text-white text-3xl rounded-full">
        <i class="fas fa-bullseye"></i>
      </div>
      <p class="font-semibold text-gray-800 dark:text-gray-200 text-center mt-2">Social Media Expert</p>
    </div>

    <div class="flex flex-col items-center gap-2 bg-yellow-50 dark:bg-yellow-900 p-4 rounded-xl shadow hover:scale-105 transition transform">
      <div class="w-16 h-16 flex items-center justify-center bg-yellow-500 text-white text-3xl rounded-full">
        <i class="fas fa-lightbulb"></i>
      </div>
      <p class="font-semibold text-gray-800 dark:text-gray-200 text-center mt-2">Content Marketing Pro</p>
    </div>

    <div class="flex flex-col items-center gap-2 bg-purple-50 dark:bg-purple-900 p-4 rounded-xl shadow hover:scale-105 transition transform">
      <div class="w-16 h-16 flex items-center justify-center bg-purple-600 text-white text-3xl rounded-full">
        <i class="fas fa-rocket"></i>
      </div>
      <p class="font-semibold text-gray-800 dark:text-gray-200 text-center mt-2">Email Campaign Specialist</p>
    </div>
  </div>
</section>

<!-- Goal/Task Modal -->
<div id="itemModal" class="hidden fixed inset-0 z-50 bg-black bg-opacity-40 flex items-center justify-center">
  <div class="bg-white dark:bg-gray-800 p-6 rounded-xl w-full max-w-lg shadow-lg">
    <h3 id="modalTitle" class="text-xl font-bold mb-4 text-indigo-600"></h3>
    <div class="grid grid-cols-1 gap-3">
      <div>
        <label class="block text-sm mb-1" id="modalLabel"></label>
        <input type="text" id="modalInput" class="w-full p-2 rounded bg-gray-100 dark:bg-gray-700"/>
      </div>
    </div>
    <div class="flex justify-end gap-3 mt-4">
      <button id="closeItemModal" class="px-4 py-2 bg-gray-500 text-white rounded-lg">Close</button>
      <button id="saveItemModal" class="px-4 py-2 bg-indigo-600 text-white rounded-lg">Add</button>
    </div>
  </div>
</div>
`;

const dashboardContainer = document.getElementById("dashboardContainer");
if (dashboardContainer) {
  dashboardContainer.innerHTML += dashboardSectionsHTML;

  // Elements
  const addGoalBtn = document.getElementById("addGoalBtn");
  const addTaskBtn = document.getElementById("addTaskBtn");
  const itemModal = document.getElementById("itemModal");
  const closeItemModal = document.getElementById("closeItemModal");
  const saveItemModal = document.getElementById("saveItemModal");
  const modalTitle = document.getElementById("modalTitle");
  const modalLabel = document.getElementById("modalLabel");
  const modalInput = document.getElementById("modalInput");

  const goalsList = document.getElementById("goalsList");
  const tasksList = document.getElementById("tasksList");

  let currentType = null; // "goal" or "task"

  // Show modal
  function showItemModal(type) {
    currentType = type;
    modalTitle.textContent = type === "goal" ? "Add Goal" : "Add Task";
    modalLabel.textContent = type === "goal" ? "Goal Description" : "Task Description";
    modalInput.value = "";
    itemModal.classList.remove("hidden");
    itemModal.classList.add("flex");
  }

  function hideItemModal() {
    itemModal.classList.add("hidden");
    itemModal.classList.remove("flex");
  }

  addGoalBtn.addEventListener("click", () => showItemModal("goal"));
  addTaskBtn.addEventListener("click", () => showItemModal("task"));
  closeItemModal.addEventListener("click", hideItemModal);

  saveItemModal.addEventListener("click", () => {
    if (!modalInput.value) {
      alert("Please enter a description!");
      return;
    }

    const newItem = document.createElement("li");
    newItem.className = "bg-gray-100 dark:bg-gray-700 p-4 rounded-lg shadow flex justify-between items-center";

    if (currentType === "goal") {
      newItem.innerHTML = `<span>${modalInput.value}</span><span class="text-sm text-gray-500 dark:text-gray-400">0% complete</span>`;
      goalsList.appendChild(newItem);
    } else if (currentType === "task") {
      newItem.innerHTML = `<span>${modalInput.value}</span><span class="text-sm text-gray-500 dark:text-gray-400">Due: TBD</span>`;
      tasksList.appendChild(newItem);
    }

    hideItemModal();
    alert("This is a simulation. To fully track goals and tasks, please choose a subscription plan.");
  });

  // Scroll to Achievements section
  const viewAchievementsBtns = document.querySelectorAll(".viewAchievementsBtn");
  viewAchievementsBtns.forEach(btn => {
    btn.addEventListener("click", () => {
      const achievementsSection = document.getElementById("achievements");
      achievementsSection.scrollIntoView({ behavior: "smooth" });
    });
  });
}







});

tailwind.config = { darkMode: "class" };
