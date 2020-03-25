
// let toggleBar = document.querySelector('.toggle__bar');
let nav = document.querySelector('.header__nav');

let toogle = document.getElementById('toggle-bar')
toogle.addEventListener('click', function(){
   toogle.classList.toggle('active')
   nav.classList.toggle('active')
})

// Initialize Swiper 
var swiper = new Swiper('.swiper-container', {
   loop: false,
   pagination: {
      el: '.swiper-pagination',
      type: 'progressbar',
   },
   navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
   },
});

