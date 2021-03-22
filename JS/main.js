import { navbar, inViewPort } from './utilities.js';


/* Show/hide the contents of the tabs in the .tabs section  */
const tabs = document.querySelectorAll('section.tabs div.tabs > *');
const tabContents = document.querySelectorAll('section.tabs .tabs-contents > *');

tabs.forEach((tab, index) => {
   tab.addEventListener('click', function () {
      tabs.forEach(tab => tab.classList.remove('active'));
      this.classList.add('active');
      tabContents.forEach(content => content.classList.remove('active'));
      tabContents[index].classList.add('active');
   });
});
/* ############################################ */



// This script lets the window (the document) scroll smoothly to the target section if any anchor link in the navigation menu gets clicked. 
const anchors = document.querySelectorAll('nav ul li a');

anchors.forEach(anchor => {
   anchor.addEventListener('click', function () {
      let hash = this.hash;
      let targetOffsetTop = document.querySelector(hash).offsetTop - navbar.offsetHeight + 1;
      $('body, html').animate({
         scrollTop: targetOffsetTop
      }, 3000, function () {
         anchor.classList.add('active');
      });
   });
})
/* ############################################### */


/* Moves the class .active from one link in the navigation menu to another while scrolling */

// Get the target sections 
const targetSections = document.querySelectorAll('.target');

window.addEventListener('scroll', () => {
   targetSections.forEach((section, index) => {
      if (inViewPort(section)) {
         anchors[index].classList.add('active');
         /* For touch screens */
         window.click();
      }
      else {
         anchors[index].classList.remove('active');
      }
   });
});


