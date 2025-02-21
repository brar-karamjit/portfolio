document.addEventListener("DOMContentLoaded", function () {
  const workTitles = document.querySelectorAll(".work-item h5");

  workTitles.forEach((title) => {
    title.addEventListener("mouseenter", () => {
      title.style.transform = "translateX(5px)";
    });

    title.addEventListener("mouseleave", () => {
      title.style.transform = "translateX(0)";
    });
  });
});
