import { navbar, inViewPort } from './utilities.js';

const nav_list = document.querySelector('.nav-list');
const toggler = document.querySelector('.toggle');
const close_btn = document.querySelector('.close-btn');
const anchors = document.querySelectorAll('nav ul li a');
const targetSections = document.querySelectorAll('.target');


toggler.addEventListener('click', function () {
   this.classList.toggle('active');
   nav_list.classList.toggle('burger-active');
});

close_btn.addEventListener('click', () => {
   nav_list.classList.remove('burger-active');
   toggler.classList.remove('active');
});


// This script lets the window (the document) scroll smoothly to the target section if any anchor link in the navigation menu gets clicked. 
anchors.forEach(anchor => {
   anchor.addEventListener('click', function (e) {
      e.preventDefault();
      let hash = this.hash;
      let targetOffsetTop = document.querySelector(hash).offsetTop - navbar.offsetHeight + 1;
      $('body, html').animate({
         scrollTop: targetOffsetTop
      }, 3000);
   });
})


/* Moves the class .active from one link in the navigation menu to another while scrolling */
window.addEventListener('scroll', () => {
   targetSections.forEach((section, index) => {
      if (inViewPort(section)) {
         anchors.forEach(anchor => anchor.classList.remove('active'));
         anchors[index].classList.add('active');
      }
      else {
         anchors[index].classList.remove('active');
      }
   });
});