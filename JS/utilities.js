const navbar = document.querySelector('nav');

function inViewPort(HTMLElement) {
   return (
      window.pageYOffset + navbar.offsetHeight >= HTMLElement.offsetTop) &&
      (window.pageYOffset + navbar.offsetHeight < HTMLElement.offsetTop + HTMLElement.offsetHeight);
}


export { navbar, inViewPort };