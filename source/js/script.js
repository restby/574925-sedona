var menuCloseBtn = document.querySelector('.navigation__btn');
var menuOpenBtn = document.querySelector('.page-header__btn');
var logoLink = document.querySelector('.page-header__link');
var menuNav = document.querySelector('.navigation__list');

menuOpenBtn.classList.remove('page-header__btn--no-js');
menuOpenBtn.classList.add('page-header__btn--show');
menuNav.classList.remove('navigation__list--no-js');
logoLink.classList.add('page-header__link--move');

menuOpenBtn.addEventListener('click', function(evt) {
  evt.preventDefault();
  menuOpenBtn.classList.remove('page-header__btn--show');
  menuNav.classList.add('navigation__list--show');
  logoLink.classList.remove('page-header__link--move');
  menuCloseBtn.classList.remove('navigation__btn--no-js');
});

menuCloseBtn.addEventListener('click', function(evt) {
  evt.preventDefault();
  menuOpenBtn.classList.add('page-header__btn--show');
  menuNav.classList.remove('navigation__list--show');
  logoLink.classList.add('page-header__link--move');
  menuCloseBtn.classList.add('navigation__btn--no-js');
});
