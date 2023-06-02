const nextBtn = document.querySelector(".botoes__next-rainbow");
const previousBtn = document.querySelector(".botoes__previous-rainbow");

let currentImageIndex = 0;
var images = document.querySelectorAll(".carroussel img");

nextBtn.addEventListener("click", () => {
  images[currentImageIndex].classList.remove("active");
  currentImageIndex--;
  if (currentImageIndex < 0) {
    currentImageIndex = images.length - 1;
  }
  images[currentImageIndex].classList.add("active");
  images[currentImageIndex].style.opacity = 1;
});

previousBtn.addEventListener("click", () => {
  images[currentImageIndex].classList.remove("active");
  currentImageIndex++;
  if (currentImageIndex >= images.length) {
    currentImageIndex = 0;
  }
  images[currentImageIndex].classList.add("active");
  images[currentImageIndex].style.opacity = 1;
});
