const modeToggleBtn = document.getElementById("modeToggle");
let isDarkMode = false;

modeToggleBtn.addEventListener("click", function () {
  isDarkMode = !isDarkMode;

  document.body.classList.toggle("dark-mode");

  // Change button appearance based on mode
  if (isDarkMode) {
    modeToggleBtn.textContent = "🌞"; // Show sun emoji in dark mode
  } else {
    modeToggleBtn.textContent = "🌜"; // Show moon emoji in light mode
  }
});
