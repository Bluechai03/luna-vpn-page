const navList = document.querySelector('.nav__list');
const openMenu = document.querySelector('.nav__menu--open');
const closeMenu = document.querySelector('.nav__menu--close');


openMenu.addEventListener('click', show);
closeMenu.addEventListener('click', close);
navList.addEventListener('click', close);

function show(){
    openMenu.style.display = 'none';
    closeMenu.style.display = 'flex';
    navList.style.display = 'flex';
    navList.style.top  ='0';
}

function close(){
    navList.style.top = '-100%';
    closeMenu.style.display = 'none';
    openMenu.style.display = 'block';

}