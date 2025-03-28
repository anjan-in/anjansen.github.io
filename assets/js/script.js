const themeToggleBtn = document.getElementById("theme-toggle");
const colorPicker = document.getElementById("color-picker");

function applyTheme(color) {
  document.documentElement.style.setProperty('--primary-color', color);
  localStorage.setItem("themeColor", color);
}

function toggleTheme() {
  document.body.classList.toggle("dark-mode");
  const isDarkMode = document.body.classList.contains("dark-mode");
  localStorage.setItem("darkMode", isDarkMode);

  themeToggleBtn.textContent = isDarkMode ? "🌙 Dark Mode" : "☀️ Light Mode";
}

function loadPreferences() {
  const savedColor = localStorage.getItem("themeColor");
  const isDarkMode = JSON.parse(localStorage.getItem("darkMode"));
  
  if (savedColor) {
    applyTheme(savedColor);
    colorPicker.value = savedColor;
  }
  
  if (isDarkMode) {
    document.body.classList.add("dark-mode");
    themeToggleBtn.textContent = "🌙 Dark Mode";
  } else {
    themeToggleBtn.textContent = "☀️ Light Mode";
  }
}

themeToggleBtn.addEventListener("click", toggleTheme);
colorPicker.addEventListener("input", (e) => applyTheme(e.target.value));

loadPreferences();

// Back 2 Top Button
const backToTopBtn = document.getElementById("backToTopBtn");

// Show the button when the user scrolls down 300px
window.onscroll = function () {
  if (window.scrollY > 300) {
    backToTopBtn.style.display = "block";
  } else {
    backToTopBtn.style.display = "none";
  }
};

// Scroll to top when button is clicked
backToTopBtn.addEventListener("click", function () {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});


// Navigation JS

const hamburger = document.getElementById('hamburger');
const closeIcon = document.getElementById('close-icon');
const navbar = document.getElementById('navbar');
const overlay = document.getElementById('overlay');

function toggleMenu() {
    navbar.classList.toggle('active');
    overlay.classList.toggle('active');
}

function closeMenu() {
    navbar.classList.remove('active');
    overlay.classList.remove('active');
}

hamburger.addEventListener('click', toggleMenu);
closeIcon.addEventListener('click', closeMenu);
overlay.addEventListener('click', closeMenu);

window.addEventListener('scroll', function() {
    const header = document.querySelector('header');
    header.classList.toggle('solid', window.scrollY > 50);
});

// prohibit things
document.addEventListener('contextmenu', function (e) {
  e.preventDefault();
});

document.addEventListener('keydown', function (e) {
  // Prevent F12, Ctrl+Shift+I, Ctrl+Shift+J, Ctrl+U, Ctrl+S
  if (
    e.key === 'F12' ||
    (e.ctrlKey && e.shiftKey && (e.key === 'I' || e.key === 'J')) ||
    (e.ctrlKey && (e.key === 'U' || e.key === 'S'))
  ) {
    e.preventDefault();
  }
});

document.addEventListener('dragstart', function (e) {
  e.preventDefault();
});