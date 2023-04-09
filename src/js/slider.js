import Swiper from 'swiper/bundle';

const swiper = new Swiper('.swiper', {
  loop: true,
  spaceBetween: 100,

  pagination: {
    el: '.slider-pagination',
    type: 'bullets',
    clickable: true,
  },
});
