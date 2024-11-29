var menuBtn = document.querySelector('.menu-btn');
let menuOpen = false;
var sideNav = document.querySelector('.sideNav');
menuBtn.addEventListener('click', function(event) {
    if(!menuOpen) {
        menuBtn.classList.add('open');
        menuOpen = true;
        sideNav.style.width = '250px';
    } else {
        menuBtn.classList.remove('open');
        menuOpen = false;
        sideNav.style.width = '0px';
    }
});

document.addEventListener('mousedown', sideNavOutBoundClick)

function sideNavOutBoundClick(e) {
    if(e.screenX > 250) {
        menuBtn.classList.remove('open');
        menuOpen = false;
        sideNav.style.width = '0px';
    }
}