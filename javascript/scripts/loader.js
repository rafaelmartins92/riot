document.addEventListener("DOMContentLoaded", () => {
  let timeline = new TimelineMax();

  timeline
    .fromTo(
      ".bg-loader",
      1,
      { width: "100%" },
      { width: "0%", delay: 3, ease: Expo.easeInOut }
    )
    .fromTo(
      ".gsap-body",
      1,
      { overflow: "hidden" },
      { overflow: "", delay: 2 },
      "-=2"
    )
    .fromTo(
      ".slide-principal",
      2,
      { width: "0%", opacity: 0 },
      { width: "100%", opacity: 1, ease: Expo.easeInOut },
      "-=2"
    )
    .fromTo(
      ".gsap-header-logo",
      0.7,
      { y: -50, opacity: 0 },
      { y: 0, opacity: 1, ease: Expo.easeInOut },
      "-=0.5"
    )
    .fromTo(
      ".gsap-header-nav",
      0.7,
      { y: -50, opacity: 0 },
      { y: 0, opacity: 1, ease: Expo.easeInOut },
      "-=0.5"
    )
    .fromTo(
      ".gsap-header-buttons",
      0.7,
      { y: -50, opacity: 0 },
      { y: 0, opacity: 1, ease: Expo.easeInOut },
      "-=0.5"
    )
    .fromTo(
      ".slide-thumbnail",
      0.7,
      { y: -50, opacity: 0 },
      { y: 0, opacity: 1, ease: Expo.easeInOut },
      "-=0.5"
    )
    .fromTo(
      ".gsap-slide-text",
      0.7,
      { y: -50, opacity: 0 },
      { y: 0, opacity: 1, ease: Expo.easeInOut },
      "-=0.5"
    )
    .fromTo(
      ".gsap-slide-trailer",
      0.7,
      { y: -50, opacity: 0 },
      { y: 0, opacity: 1, ease: Expo.easeInOut },
      "-=0.5"
    )
    .fromTo(
      ".s-games",
      0.7,
      { y: -50, opacity: 0 },
      { y: 0, opacity: 1, ease: Expo.easeInOut },
      "-=0.5"
    )
    .fromTo(
      ".s-download",
      0.7,
      { y: -50, opacity: 0 },
      { y: 0, opacity: 1, ease: Expo.easeInOut },
      "-=0.5"
    )
    .fromTo(
      ".s-download",
      0.7,
      { y: -50, opacity: 0 },
      { y: 0, opacity: 1, ease: Expo.easeInOut },
      "-=0.5"
    );
});
