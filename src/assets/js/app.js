// Npm Импорт JS Библиотек
import $ from "jquery";
// Импортируем Font-awesome
import '@fortawesome/fontawesome-free/js/fontawesome'
import '@fortawesome/fontawesome-free/js/solid'
import '@fortawesome/fontawesome-free/js/regular'
import '@fortawesome/fontawesome-free/js/brands'
// Импортируем Bootstrap 5
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
// Импортируем Swiper
import Swiper from 'swiper';
// Внимание! Без подключения модулей Swiper из ядра, таких как Autoplay-подобные функции работать по-дефолту не будут.
import SwiperCore, { Navigation, Pagination, Autoplay } from 'swiper/core';
SwiperCore.use([Navigation, Pagination, Autoplay]);
// Npm Импорт CSS
// Swiper
import 'swiper/swiper-bundle.css';
// Animate
import 'animate.css/animate.css';

// Функционал страницы
$(document).ready(function() {
  $('button#generate-alert').click(function() {
    alert('jQuery успешно установлена!');
  });
});

// Swiper slider
var swiper = new Swiper(".swiper-container", {
  direction: 'horizontal',
  grabCursor: true,
  speed: 150,
  loopedSlides: 3,
  loop: true,
  slidesPerView: 1,
  freeMode: false,
  clickable: true,
  autoplay: true,
  autoplayDisableOnInteraction: false,
    // If we need pagination
  pagination: {
    el: '.swiper-pagination'
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev'
  },

  // And if we need scrollbar
  scrollbar: {
    el: '.swiper-scrollbar'
  }
});
