// Næ í öll HTML töggin sem við þurfum
const hiddenWordHTML = document.getElementById('hiddenWord');
const wrongLettersHTML = document.getElementById('wrongLetters');
const pickLetterHTML = document.getElementById('pickLetter');

// Búum til breytur sem við notum í forritinu
let wordPicked = '';
let letterPicked = '';
let hiddenWord = '';
let wrongLetters = [];
const words = ['javascript', 'programming', 'code', 'computer', 'geek'];

function pickWord(wordArray) {
  // Fall sem fer í gegnum wordArray listann og velur random orð úr honum
  // og skilar því orði sem var valið út úr fallinu.
  tempWordPicked = wordArray[Math.floor(Math.random() * words.length)];
  return tempWordPicked;
}

function createHiddenWord(wordPicked) {
  // Fall sem tekur inn orðið sem var valið út úr pickWord fallinu og
  // býr til hiddenWord sem er með undirstrikum í stað bókstafa.
  let tempHiddenWord = '';
  for (let i = 0; i < wordPicked.length; i++) {
    tempHiddenWord += '_';
  }
  return tempHiddenWord;
}

function displayWrongLetters(tempLetter) {
  // Fall sem tekur inn staf sem var valinn og birtir hann í HTML skjalinu.
  wrongLettersHTML.innerHTML += tempLetter;
  return tempLetter;
}

function revealLetter(tempLetterPicked, tempWordPicked, tempHiddenWord) {
  for (let i = 0; i < tempWordPicked.length; i++) {
    if (tempWordPicked[i] === tempLetterPicked) {
      tempHiddenWord = tempHiddenWord.substr(0, i) + 
      tempLetterPicked + tempHiddenWord.substr(i + 1);
    }
  }
  return tempHiddenWord;
}

function checkWinAndRefresh(hiddenWord) {
  // Check if hiddenWord contains any underscores
  if (!hiddenWord.includes('_')) {
      // If not, the user has won
      alert("You won!!!!");

      // Refresh the page after 10 seconds
      setTimeout(function() {
          location.reload();
      }, 5000);
  }
}

pickLetterHTML.addEventListener('keyup', function(event) {
  // Fall sem hlustar á lykla sem ýtt er á og skilar þeim lykli sem var ýtt á.
  let tempLetter = event.key;
  tempLetter = tempLetter.toLowerCase();
  // check if tempLetter is in the alphabet
  if (tempLetter < 'a' || tempLetter > 'z') {
    alert('Please enter a letter');
    pickLetterHTML.value = '';
    return;
  }
  // check if tempLetter has already been picked
  if (wrongLetters.includes(tempLetter)) {
    alert('You have already picked that letter');
    pickLetterHTML.value = '';
    return;
  }
  hiddenWord = revealLetter(tempLetter, wordPicked, hiddenWord);
  hiddenWordHTML.innerHTML = hiddenWord;
  pickLetterHTML.value = '';
  wrongLetters.push(displayWrongLetters(tempLetter));
  checkWinAndRefresh(hiddenWord);
  return;
});

// keyrt upp í byrjun þegar skjalið fer í gang og ekki aftur
wordPicked = pickWord(words);
hiddenWord = createHiddenWord(wordPicked);
hiddenWordHTML.innerHTML = hiddenWord;
