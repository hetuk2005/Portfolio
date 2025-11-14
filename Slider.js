const slider = document.querySelectorAll(".slider");
const nextBtn = document.querySelector(".next");
const prevBtn = document.querySelector(".prev");

let index = 0;
let timer;

function showSlide(i) {
  // Wrap Around

  if (i >= slider.length) index = 0;
  else if (i < 0) index = slider.length - 1;
  else index = i;

  // Remove Active Class From All Slides

  slider.forEach((slide) => slide.classList.remove("active"));

  // Activate Current Slide

  slider[index].classList.add("active");

  // Restart Autoplay

  resetTimer();
}

// Next Slide

function nextSlide() {
  showSlide(index + 1);
}

// Previous Slide

function prevSlide() {
  showSlide(index - 1);
}

// Autoplay

function startTimer() {
  timer = setInterval(() => {
    nextSlide();
  }, 4000);
}

function resetTimer() {
  clearInterval(timer);
  startTimer();
}

// Button Events

nextBtn.addEventListener("click", nextSlide);
prevBtn.addEventListener("click", prevSlide);

// Start Slider

showSlide(index);
startTimer();
