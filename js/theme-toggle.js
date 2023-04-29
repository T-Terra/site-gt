const themeToggle = document.getElementById("theme-toggle");
const themeIcon = document.getElementById("theme-icon");
const html = document.querySelector("html")

themeToggle.addEventListener("click", function() {
  html.classList.toggle("dark-mode");
  themeIcon.classList.toggle("fa-moon");
  themeIcon.classList.toggle("fa-sun");
  localStorage.setItem("theme", html.classList.contains("dark-mode") ? "dark" : "light");
});

if (localStorage.getItem("theme") === "dark") {
  html.classList.add("dark-mode");
  themeIcon.classList.replace("fa-moon", "fa-sun");
}

