import Swiper from 'swiper/bundle';

const swiper = new Swiper('.swiper', {
  loop: true,
  spaceBetween: 30,

  pagination: {
    el: '.pagination',
    clickable: true,
  },
});
