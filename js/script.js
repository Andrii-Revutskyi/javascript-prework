// Computer's move randomization
var computerMove, randomNumber;
randomNumber = Math.floor(Math.random() * 3 + 1);
console.log('Wylosowana liczba to: ' + randomNumber);

if (randomNumber == 1) {
  computerMove = 'kamień';
} else if (randomNumber == 2) {
  computerMove = 'papier';
} else if (randomNumber == 3) {
  computerMove = 'nożyce';
} else {
  computerMove = 'nieznany ruch';
}

printMessage('Mój ruch: ' + computerMove);

// Player's move selection
var playerInput = prompt('Wybierz swój ruch: 1 - kamień, 2 - papier, 3 - nożyce');
var playerMove;

if (playerInput == 1) {
  playerMove = 'kamień';
} else if (playerInput == 2) {
  playerMove = 'papier';
} else if (playerInput == 3) {
  playerMove = 'nożyce';
} else {
  printMessage('Błędny wybór! Zakładamy, że wybrałeś kamień.');
  playerMove = 'kamień';
}

printMessage('Twój ruch: ' + playerMove);