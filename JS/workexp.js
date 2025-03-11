document.addEventListener("DOMContentLoaded", function () {
  const workTitles = document.querySelectorAll(".work-item h5");

  workTitles.forEach((title) => {
    title.style.transition = "transform 0.3s ease, color 0.3s ease"; // Add transition for smoothness
    
    title.addEventListener("mouseenter", () => {
      title.style.transform = "translateX(5px)";
      title.style.color = "rgba(255, 165, 0, 0.8)"; // Change color to orange
    });

    title.addEventListener("mouseleave", () => {
      title.style.transform = "translateX(0)";
      title.style.color = "#ffffff"; // Reset color back to white
    });
  });
});
