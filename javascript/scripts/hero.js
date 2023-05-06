const slideThumbnail = new Swiper(".slide-thumbnail", {
  slidesPerView: 6,
  direction: "vertical",
  spaceBetween: 20,
  watchSlidesProgress: true,
  breakpoints: {
    320: {
      direction: "horizontal",
    },
    1150: {
      direction: "vertical",
    },
  },
});

const progressSlide = document.querySelector(".js-progress");

let slideHero = new Swiper(".slide-principal");

setTimeout(function () {
  slideHero = new Swiper(".slide-principal", {
    effect: "fade",
    thumbs: {
      swiper: slideThumbnail,
    },
    autoplay: {
      delay: 5000,
      disabledOnInteraction: false,
    },
    on: {
      init: function () {
        progressSlide.classList.remove("animate");
        progressSlide.classList.remove("active");
        progressSlide.classList.add("animate");
        progressSlide.classList.add("active");
      },
      slideChangeTransitionStart: function () {
        progressSlide.classList.remove("animate");
        progressSlide.classList.remove("active");
        progressSlide.classList.add("active");
      },
      slideChangeTransitionEnd: function () {
        progressSlide.classList.add("animate");
      },
    },
  });
}, 5000);

slideThumbnail.on("click", function () {
  slideHero.slideTo(slideThumbnail.clickedIndex);
  slideHero.autoplay.start();
  slideHero.update();
});
