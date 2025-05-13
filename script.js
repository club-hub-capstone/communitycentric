console.log("Hello, World!");

const themeCheckbox = document.querySelector("input[name='theme']");
let theme = window.localStorage.getItem("theme") ?? window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
themeCheckbox.checked = theme === "dark";
themeCheckbox.addEventListener("change", (e) => {
  theme = e.target.checked ? "dark" : "light";
  document.documentElement.setAttribute("data-theme", theme);
  window.localStorage.setItem("theme", theme);
});
