document.addEventListener("DOMContentLoaded", function () {
  window.addEventListener("scroll", function () {
    var navbar = document.querySelector(".navbar");

    // Calculate opacity based on scroll position
    var opacity = Math.min(1, window.scrollY / 150);

    // Apply a darker background color with blur effect using box-shadow
    navbar.style.backgroundColor = `rgba(0, 0, 0, ${opacity})`;
    navbar.style.boxShadow = `0 0 20px rgba(0, 0, 0, ${opacity * 0.3})`; // Soft shadow effect around navbar
    navbar.style.transition = "background-color 0.3s ease, box-shadow 0.3s ease"; // smooth transitions
  });
});
