import Swiper from 'swiper/bundle';

const swiper = new Swiper('.swiper', {
  // Optional parameters
  loop: true,
  spaceBetween: 20,

  pagination: {
    el: '.slider-pagination',
    clickable: true,
  },

  // breakpoints: {
  //   768: {
  //     slidesPerView: 1,
  //     spaceBetween: 30,
  //   },
  //   // when window width is >= 640px
  //   1200: {
  //     slidesPerView: 2,
  //     spaceBetween: 40,
  //   },
  // },
});
