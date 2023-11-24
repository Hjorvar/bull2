const homeHtml = document.getElementById('home');
const aboutHtml = document.getElementById('about');
const photosHtml = document.getElementById('photos');
const hangmanHtml = document.getElementById('hangman');

homeHtml.addEventListener('click', () => {
  window.location.href = 'index.html';
});
aboutHtml.addEventListener('click', () => {
  window.location.href = 'aboutMe.html';
});
photosHtml.addEventListener('click', () => {
  window.location.href = 'photoAlbum.html';
});
hangmanHtml.addEventListener('click', () => {
  window.location.href = 'hangman.html';
});