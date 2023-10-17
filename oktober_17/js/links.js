const imagesHtml = document.getElementById('images');
const centerHtml = document.getElementById('center');
const indexHtml = document.getElementById('index');


imagesHtml.addEventListener('click', () => {
  window.location.href = 'images.html'; // Path: oktober_17/images.html
});

indexHtml.addEventListener('click', () => {
  window.location.href = 'index.html'; // Path: oktober_17/index.html
});

centerHtml.addEventListener('click', () => {
  window.location.href = 'center.html'; // Path: oktober_17/center.html
});
