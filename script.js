console.log("Hello, World!");

const themeCheckbox = document.querySelector("input[name='theme']");
let theme = window.localStorage.getItem("theme");
if (!theme)
  theme = window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";

// Set theme on load
document.documentElement.setAttribute("data-theme", theme);
themeCheckbox.checked = theme === "dark";

// Add event listener to theme checkbox
themeCheckbox.addEventListener("change", (e) => {
  theme = e.target.checked ? "dark" : "light";
  document.documentElement.setAttribute("data-theme", theme);
  window.localStorage.setItem("theme", theme);
});
