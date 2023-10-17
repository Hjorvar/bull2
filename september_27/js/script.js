const titleHtml = document.getElementById('title');
const heading01Html = document.getElementById('heading01');

titleHtml.innerHTML = 'Light/Dark';
heading01Html.innerHTML = 'Change CSS with button';

function changeCSS(){
  const cssFileNow = document.getElementsByTagName('link')[0];
  if (cssFileNow.href.endsWith('light.css')){
    cssFileNow.href = 'css/dark.css';
    heading01Html.innerHTML = 'Dark Mode';
  } else {
    cssFileNow.href = 'css/light.css';
  }
}