const btnRight = document.getElementById('right');
const btnLeft = document.getElementById('left');
const title = document.getElementById('title');
const text = document.getElementById('text');
const picture = document.getElementById('picture');

const roomNav = document.querySelector('.room__nav');
const btnMenu = document.querySelector('.room__menu');
const btnClose = document.querySelector('.room__close');
const overlay = document.querySelector('.overlay');

const titles = {
    0: 'Discover innovative ways to decorate',
    1: 'We are available all across the globe',
    2: 'Manufactured with the best materials'
}

const texts = {
    0: `We provide unmatched quality, comfort, and style for property owners across the country. 
  Our experts combine form and function in bringing your vision to life. Create a room in your 
  own style with our collection and make your property a reflection of you and what you love.`,
  1: `With stores all over the world, it's easy for you to find furniture for your home or place of business. 
  Locally, we’re in most major cities throughout the country. Find the branch nearest you using our 
  store locator. Any questions? Don't hesitate to contact us today.`, 
  2: `Our modern furniture store provide a high level of quality. Our company has invested in advanced technology to ensure that 
  every product is made as perfect and as consistent as possible. With three decades of experience in this industry, we understand what customers want
  for their home and office.`
}

const picturesDesktop = {
    0: `./images/desktop-image-hero-1.jpg`,
    1: `./images/desktop-image-hero-2.jpg`,
    2: `./images/desktop-image-hero-3.jpg`
}

const picturesMobile = {
    0: `./images/mobile-image-hero-1.jpg`,
    1: `./images/mobile-image-hero-2.jpg`,
    2: `./images/mobile-image-hero-3.jpg`,
}

let count = 0;

function minues() {
    if (count === 0) {
        return
    } 
    count--;
    if (count === 0) {
        btnLeft.setAttribute('aria-disabled', true);
    } else {
        btnRight.setAttribute('aria-disabled', false);  
    }
    showInformation();
    showPicture();
}
function plus() {
    if (count === 2) {
        return
    } 
    count++;
    if (count === 2) {
        btnRight.setAttribute('aria-disabled', true);
        btnLeft.setAttribute('aria-disabled', false);
    } else {
        btnLeft.setAttribute('aria-disabled', false);
    }
    showInformation();
    showPicture();
}
function showInformation() {
    title.textContent = titles[count];
    text.textContent = texts[count];
}

function showPicture() {
    if (window.innerWidth >= 1024) {
        picture.src = picturesDesktop[count];
    } else if (window.innerWidth < 1024) {
        picture.src = picturesMobile[count];
    }
}

function resetPage() {
    count = 0;
    showPicture();
    showInformation();
    hiddenMenu();
}

function showMenu() {
    roomNav.classList.add('room__nav--active');
    overlay.style.display = 'block';
}

function hiddenMenu() {
    roomNav.classList.remove('room__nav--active');
    overlay.style.display = 'none';
}

function removeMenu() {
    if (window.innerWidth >= 1024) {
        roomNav.classList.remove('room__nav--active');
        overlay.style.display = 'none';
    }
}

btnLeft.addEventListener('click', minues);
btnRight.addEventListener('click', plus);

document.addEventListener('DOMContentLoaded', resetPage);
window.addEventListener('resize', removeMenu);
btnMenu.addEventListener('click', showMenu);
btnClose.addEventListener('click', hiddenMenu);