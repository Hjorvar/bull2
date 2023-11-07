// Næ í öll HTML töggin sem við þurfum
const hiddenWordHTML = document.getElementById('hiddenWord');
const wrongLettersHTML = document.getElementById('wrongLetters');
const pickLetterHTML = document.getElementById('pickLetter');

// Búum til lista af orðum
const words = ['javascript', 'programming', 'code', 'computer', 'geek'];

// Búum til breytur sem við notum í forritinu
let wordPicked = '';
let wrongLetters = [];
let letterPicked = '';


function pickWord(wordArray) {
  // Fall sem fer í gegnum wordArray listann og velur random orð úr honum
  // og skilar því orði sem var valið út úr fallinu.
  // Fallið virkar núna, fær random orð úr listanum sem er sendur inn
  tempWordPicked = wordArray[Math.floor(Math.random() * words.length)];
  return tempWordPicked;
}

function createHiddenWord(wordPicked) {
  // Fall sem tekur inn orðið sem var valið út úr pickWord fallinu og
  // býr til hiddenWord sem er með undirstrikum í stað bókstafa.
  // Fallið virkar núna, býr til hiddenWord með stjörnum
  console.log(wordPicked);
  let tempHiddenWord = '';
  for (let i = 0; i < wordPicked.length; i++) {
    tempHiddenWord += '_ ';
  }
  return tempHiddenWord;
}

function displayWrongLetters(tempLetter) {
  // Fall sem tekur inn staf sem var valinn og birtir hann í HTML skjalinu.
  // Fallið virkar núna, birtir stafinn sem var valinn í HTML skjalinu
  wrongLettersHTML.innerHTML += tempLetter;
}

pickLetterHTML.addEventListener('keyup', function(event) {
  // Fall sem hlustar á lykla sem ýtt er á og skilar þeim lykli sem var ýtt á.
  // Fallið virkar núna, skilar lyklinum sem var ýtt á
  let tempLetter = event.key;
  pickLetterHTML.value = '';
  displayWrongLetters(tempLetter);
  return;
});

wordPicked = pickWord(words);
hiddenWordHTML.innerHTML = createHiddenWord(wordPicked);
