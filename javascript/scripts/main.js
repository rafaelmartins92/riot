const slideThumbnail = new Swiper(".slide-thumbnail", {
  slidesPerView: 5,
  direction: "vertical",
  spaceBetween: 20,
  watchSlidesProgress: true,
});

const slideHero = new Swiper(".slide-principal", {
  effect: "fade",
  thumbs: {
    swiper: slideThumbnail,
  },
  autoplay: {
    delay: 5000,
    disabledOnInteraction: false,
  },
});
