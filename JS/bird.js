  document.addEventListener('DOMContentLoaded', () => {
    const birdContainer = document.getElementById('bird-container');
    const birdImage = 'media/bird.gif'; // Path to your bird image

    function createBird() {
      const bird = document.createElement('img');
      bird.src = birdImage;
      bird.classList.add('bird');
      console.log("bird");
      // Randomize starting position and animation duration
      const randomStartTop = Math.random() * 80 + 10; // Random top position (10% to 90% of the screen)
      const randomDuration = Math.random() * 15 + 14; // Random animation duration (5 to 15 seconds)
      bird.style.top = `${randomStartTop}vh`;
      bird.style.animationDuration = `${randomDuration}s`;

      birdContainer.innerHTML = ''; // Clear the previous bird
      birdContainer.appendChild(bird); // Append the new bird

      // Remove the bird after the animation completes
      setTimeout(() => {
        bird.remove();
      }, 7000);
    }

    // Randomize the time interval for bird appearances (between 5 and 15 seconds)
    function randomBirdFly() {
      const randomInterval = Math.random() * 20000 + 15000; // 5 to 15 seconds

      setTimeout(() => {
        createBird();
        randomBirdFly(); // Repeat the process
      }, randomInterval);
    }

    // Start the first bird animation
    randomBirdFly();
  });