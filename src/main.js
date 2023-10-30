window.addEventListener('scroll', function () {
  console.log('window.pageYOffset :>> ', window.pageYOffset);
  const nav = document.querySelector('nav');
  const slide1 = document.querySelector('.slide1');
  if (window.pageYOffset > 100) {
    nav.classList.add('nav-white-bg');
    // nav.dataset.aos = 'fade-down';
  } else {
    nav.classList.remove('nav-white-bg');
    // nav.dataset.aos = 'fade-up';
  }

  slide1.style.backgroundPosition = `0px -${window.pageYOffset * 1.5}px`;
});
