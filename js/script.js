function getMoveName(moveId) {
  if (moveId == 1) {
    return 'kamień';
  } else if (moveId == 2) {
    return 'papier';
  } else if (moveId == 3) {
    return 'nożyce';
  } else {
    return 'nieznany ruch';
  }
}

function displayResult(playerMove, computerMove) {
  if (
    (playerMove === 'kamień' && computerMove === 'nożyce') ||
    (playerMove === 'papier' && computerMove === 'kamień') ||
    (playerMove === 'nożyce' && computerMove === 'papier')
  ) {
    printMessage('Wygrywasz!');
  } else if (playerMove === computerMove) {
    printMessage('Remis!');
  } else {
    printMessage('Przegrywasz!');
  }
}

// Losowanie ruchu komputera
var randomNumber = Math.floor(Math.random() * 3 + 1);
var computerMove = getMoveName(randomNumber);
printMessage('Mój ruch: ' + computerMove);

// Wybór ruchu gracza
var playerInput = prompt('Wybierz swój ruch: 1 - kamień, 2 - papier, 3 - nożyce');
var playerMove = getMoveName(playerInput);
printMessage('Twój ruch: ' + playerMove);

displayResult(playerMove, computerMove);