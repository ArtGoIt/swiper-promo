import Swiper from 'swiper/bundle';

const swiper = new Swiper('.swiper', {
  // Optional parameters
  loop: true,
  spaceBetween: 60,

  pagination: {
    el: '.slider-pagination',
    clickable: true,
  },
});
