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

const slideHero = new Swiper(".slide-principal", {
  effect: "fade",
  thumbs: {
    swiper: slideThumbnail,
  },
  autoplay: {
    delay: 6000,
    disabledOnInteraction: false,
  },
});
