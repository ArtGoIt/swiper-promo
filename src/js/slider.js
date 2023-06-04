import Swiper from 'swiper/bundle';

const swiper = new Swiper('.swiper', {
  // Optional parameters
  loop: true,
  spaceBetween: 30,
  slidesPerView: 1,

  // If we need pagination
  pagination: {
    el: '.pagination',
    clickable: true,
  },
});
