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

function submitWhereToGo() {
  const result = document.querySelector('#result');
  result.classList.remove('hidden');
  // result.classList.add('block');
  const randomNum = Math.floor(Math.random() * (2 - 0 + 1) + 0);
  const resultContent = document.querySelector('#resultContent');
  const resultArr = ['法國聖米歇爾山', '德國新天鵝堡', '慕尼黑二日遊'];
  resultContent.innerHTML = resultArr[randomNum];
}
