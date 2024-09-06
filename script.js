'use strict';

/**
 * element toggle function
 */

const elemToggleFunc = function (elem) { 
  elem.classList.toggle("active"); 
}

/**
 * navbar toggle
 */

const navbar = document.querySelector("[data-navbar]");
const overlay = document.querySelector("[data-overlay]");
const navCloseBtn = document.querySelector("[data-nav-close-btn]");
const navOpenBtn = document.querySelector("[data-nav-open-btn]");
const navbarLinks = document.querySelectorAll("[data-nav-link]");

const navElemArr = [overlay, navCloseBtn, navOpenBtn];

/**
 * close navbar when clicking on navbar links
 */

navbarLinks.forEach(link => {
  link.addEventListener("click", function () {
    elemToggleFunc(navbar);
    elemToggleFunc(overlay);
  });
});

/**
 * add event listener to all elements for toggling navbar
 */
navElemArr.forEach(elem => {
  elem.addEventListener("click", function () {
    elemToggleFunc(navbar);
    elemToggleFunc(overlay);
  });
});



/**
 * header active state
 */

const header = document.querySelector("[data-header]");

window.addEventListener("scroll", function () {
  // Add 'active-header' class to header when scrolled 400px down
  if (window.scrollY >= 400) {
    header.classList.add("active-header");
  } else {
    header.classList.remove("active-header");
  }
});


const images = document.querySelectorAll('.carousel-image');
let currentImageIndex = 0;

function changeImage() {
  images[currentImageIndex].classList.remove('active');
  currentImageIndex = (currentImageIndex + 1) % images.length;
  images[currentImageIndex].classList.add('active');
}

setInterval(changeImage, 3000); // Change image every 3 seconds
