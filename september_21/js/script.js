// htmlTags placed into variables
const titleHtml = document.getElementById('title');
const actionHtml = document.getElementById('action');
const resultHtml = document.getElementById('result');

// variables for the numbers i'm going to use for the calculations
const number01 = 10;
const number02 = 3;
const number03 = 5;
const number04 = 2;

// variables for the results of the calculations
const result01 = number01 / number02;
const result02 = number01 * number02;
const result03 = number01 + number02;
const result04 = number01 - number02;

// variables displayed in the html
titleHtml.innerHTML = 'Javascript Operators';
actionHtml.innerHTML = 'The result of the calculation is: ';
resultHtml.innerHTML = `The result of the calculation is: ${result01} <br> \
  The result of the calculation is: ${result02} <br> \
  The result of the calculation is: ${result03} <br> \
  The result of the calculation is: ${result04}`;

