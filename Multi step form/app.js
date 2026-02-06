document.addEventListener("DOMContentLoaded", () => {
  const stepIndicators = document.querySelectorAll(".progress-container li");

  document.documentElement.style.setProperty("--steps", stepIndicators.length);
});
