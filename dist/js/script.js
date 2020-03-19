
// let toggleBar = document.querySelector('.toggle__bar');
let nav = document.querySelector('.header__nav');

let toogle = document.getElementById('toggle-bar')
toogle.addEventListener('click', function(){
   toogle.classList.toggle('active')
   nav.classList.toggle('active')
})

