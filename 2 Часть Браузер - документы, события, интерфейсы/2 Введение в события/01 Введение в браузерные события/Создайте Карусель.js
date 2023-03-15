{/* <div class="carousel-container">
  <div class="carousel-wrapper">
    <div class="carousel-slide">
      <img src="img1.jpg" alt="Image 1">
    </div>
    <div class="carousel-slide">
      <img src="img2.jpg" alt="Image 2">
    </div>
    <div class="carousel-slide">
      <img src="img3.jpg" alt="Image 3">
    </div>
  </div>
  <a class="carousel-prev">&#10094;</a>
  <a class="carousel-next">&#10095;</a>
</div>
 */}


/* .carousel-container {
  position: relative;
  overflow: hidden;
}

.carousel-wrapper {
  display: flex;
  transition: transform 0.3s ease-in-out;
}

.carousel-slide {
  flex: 0 0 100%;
}

.carousel-slide img {
  display: block;
  width: 100%;
}

.carousel-prev,
.carousel-next {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  display: block;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background-color: rgba(255, 255, 255, 0.5);
  font-size: 24px;
  text-align: center;
  line-height: 50px;
  cursor: pointer;
}

.carousel-prev {
  left: 0;
}

.carousel-next {
  right: 0;
} */

const carouselWrapper = document.querySelector('.carousel-wrapper');
const prevButton = document.querySelector('.carousel-prev');
const nextButton = document.querySelector('.carousel-next');
const slideWidth = carouselWrapper.clientWidth;
let slideIndex = 0;

prevButton.addEventListener('click', () => {
    if (slideIndex > 0) {
        slideIndex--;
        carouselWrapper.style.transform = `translateX(-${slideIndex * slideWidth}px)`;
    }
});

nextButton.addEventListener('click', () => {
    if (slideIndex < carouselWrapper.children.length - 1) {
        slideIndex++;
        carouselWrapper.style.transform = `translateX(-${slideIndex * slideWidth}px)`;
    }
});