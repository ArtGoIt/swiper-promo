import Swiper from 'swiper/bundle';

const swiper = new Swiper('.swiper', {
  loop: true,
  spaceBetween: 20,

  pagination: {
    el: '.slider-pagination',
    clickable: true,
    type: 'bullets',
  },

  breakpoints: {
    // when window width is >= 480px
    768: {
      slidesPerView: 1,
      spaceBetween: 30,
    },
    // when window width is >= 640px
    1200: {
      slidesPerView: 2,
      spaceBetween: 40,
    },
  },
});
