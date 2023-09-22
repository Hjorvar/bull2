// html tags added to variables
const titleHtml = document.getElementById('title');
const displayDateHtml = document.getElementById('displayDate');
const displayTextHtml = document.getElementById('displayText');
// add strings to display on page
titleHtml.innerHTML = 'Javascript button';
// function that displays the current date on the page
function getDate() {
  const date = new Date();
  displayDateHtml.innerHTML = date;
  return true;
}
// function that displays text on the page
function getText() {
  displayTextHtml.innerHTML = 'OMG, I can see the text!';
  return true;
}