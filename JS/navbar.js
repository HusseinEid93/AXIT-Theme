const nav_list = document.querySelector('.nav-list');
const toggler = document.querySelector('.toggle');
const close_btn = document.querySelector('.close-btn');

toggler.addEventListener('click', function () {
   this.classList.toggle('active');
   nav_list.classList.toggle('burger-active');
});

close_btn.addEventListener('click', () => {
   nav_list.classList.remove('burger-active');
   toggler.classList.remove('active');
});