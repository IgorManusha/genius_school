const swiper = new Swiper(".swiper-container", {
  loop: true,
  slidesPerView: 1,
  spaceBetween: 20,
  breakpoints: {
    // when window width is >= 320px
    480: {
      slidesPerView: 1,
    },
    // when window width is >= 640px
    768: {
      slidesPerView: 2,
    },
    1279: {
      slidesPerView: 3,
    },
  },

  pagination: {
    el: ".pagination",
    bulletClass: "pagination__button",
    bulletActiveClass: "pagination__button--active",
  },

  navigation: {
    nextEl: ".carousel-button.next",
    prevEl: ".carousel-button.prev",
  },
});
