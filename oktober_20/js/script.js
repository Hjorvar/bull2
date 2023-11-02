document.addEventListener('load', function() {
  const characterNameHtml = document.getElementById('characterName');

  const characterNames = ['goku', 'kratos', 'laraCroft', 'pikachu'];

  const randomNumber = Math.floor(Math.random() * characterNames.length);

  characterNameHtml.innerHTML = `<img src="images/${characterNames[randomNumber]}.jpg">` ;
});

