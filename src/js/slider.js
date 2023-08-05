import Swiper from 'swiper/bundle';

const swiper = new Swiper('.swiper', {
  // Optional parameters
  loop: true,
  spaceBetween: 30,

  pagination: {
    el: '.pagination',
    clickable: true,
  },
});
