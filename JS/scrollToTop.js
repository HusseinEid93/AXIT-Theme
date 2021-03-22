const scrollToTopBtn = document.querySelector('.scrollToTop');


window.addEventListener('scroll', () => {
   scrollToTopBtn.classList.toggle('active', window.pageYOffset > 0);
});


// Implement smooth scrolling 
scrollToTopBtn.addEventListener('click', () => {
   $('html, body').animate({
      scrollTop: 0
   }, 3500);
});