// var slides = document.querySelectorAll(".slide");
// var btns = document.querySelectorAll(".slide-nav-btn");
// let currentSlide = 1;

// // JS for MANUAL NAVIGATION
// var manualNav = function (manual) {
//   slides.forEach((slide) => {
//     slide.classList.remove("active");

//     btns.forEach((btn) => {
//       btn.classList.remove("active");
//     });
//   });

//   slides[manual].classList.add("active");
//   btns[manual].classList.add("active");
// };

// btns.forEach((btn, i) => {
//   btn.addEventListener("click", () => {
//     manualNav(i);
//     currentSlide = i;
//   });
// });

// // JS for AUTOPLAY
// var repeat = function (activeClass) {
//   let active = document.getElementsByClassName("active");
//   let i = 1;

//   var repeater = () => {
//     setTimeout(function () {
//       [...active].forEach((activeSlide) => {
//         activeSlide.classList.remove("active");
//       });

//       slides[i].classList.add("active");
//       btns[i].classList.add("active");
//       i++;

//       if (slides.length == i) {
//         i = 0;
//       }
//       if (i >= slides.length) {
//         return;
//       }
//       repeater();
//     }, 1000);
//   };
//   repeater();
// };
// repeat();

const slides = document.querySelectorAll(".slide");
const btns = document.querySelectorAll(".slide-nav-btn");
let currentSlide = 1;

// Improved `manualNav` function with synchronization check
function manualNav(manualSlideIndex) {
  if (manualSlideIndex === currentSlide) return; // Skip update if already active

  slides.forEach(slide => slide.classList.remove("active"));
  btns.forEach(btn => btn.classList.remove("active"));

  slides[manualSlideIndex].classList.add("active");
  btns[manualSlideIndex].classList.add("active");
  currentSlide = manualSlideIndex;
}

// Optimized `repeat` function using `setInterval`
function repeat() {
  const active = document.getElementsByClassName("active");

  let currentSlideIndex = currentSlide;
  const slideNext = function () {
    slides[currentSlideIndex].classList.remove("active");
    btns[currentSlideIndex].classList.remove("active");

    currentSlideIndex++;
    if (currentSlideIndex >= slides.length) {
      currentSlideIndex = 0;
    }

    slides[currentSlideIndex].classList.add("active");
    btns[currentSlideIndex].classList.add("active");
  };

  const interval = setInterval(slideNext, 100); // Adjust interval as needed

  // Stop autoplay on manual navigation or window resize
  btns.forEach(btn => btn.addEventListener("click", () => clearInterval(interval)));
  window.addEventListener("resize", () => clearInterval(interval));
}

// Initialize autoplay
repeat();

// Bind click events to navigation buttons
btns.forEach((btn, i) => btn.addEventListener("click", () => manualNav(i)));

// Optionally implement animation using CSS transitions or JavaScript libraries

// Consider adding error handling for missing elements or invalid class names

