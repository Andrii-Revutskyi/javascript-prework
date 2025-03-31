var buttonRock = document.getElementById('button-rock');
var buttonPaper = document.getElementById('button-paper');
var buttonScissors = document.getElementById('button-scissors');

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

function buttonClicked(argButtonName) {
    clearMessages();
    console.log(argButtonName + ' został kliknięty');

    var randomNumber = Math.floor(Math.random() * 3 + 1);
    var computerMove = getMoveName(randomNumber);
    printMessage('Mój ruch: ' + computerMove);

    var playerMove = argButtonName;
    printMessage('Twój ruch: ' + playerMove);

    displayResult(playerMove, computerMove);
}

buttonRock.addEventListener('click', function() {
    buttonClicked('kamień');
});
buttonPaper.addEventListener('click', function() {
    buttonClicked('papier');
});
buttonScissors.addEventListener('click', function() {
    buttonClicked('nożyce');
});
