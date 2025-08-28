document.querySelector(".navbar-logo").addEventListener("click", function () {
  const navbarOpen = document.querySelector(".navbar-open");
  if (navbarOpen) {
    navbarOpen.classList.toggle("active");
  }
});
