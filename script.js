var userpoints = document.getElementById('userpoints');
var comppoints = document.getElementById('comppoints');
var userdisplay = document.getElementById('userdisplay');
var computerdisplay = document.getElementById('computerdisplay');
var statement = document.getElementById('statement');

var user_points = 0;
var comp_points = 0;


function getComputerChoice() {
    var computer_choice = Math.floor(Math.random() * 3);
    if (computer_choice == 0) {
        computerdisplay.textContent = '✊';
        computerdisplay.style.fontSize = '100px';
    }
    if (computer_choice == 1) {
        computerdisplay.textContent = '✋';
        computerdisplay.style.fontSize = '100px';
    }
    if (computer_choice == 2) {
        computerdisplay.textContent = '✌️';
        computerdisplay.style.fontSize = '100px';
    }
    return computer_choice;
}


function gameRound(string) {
    if (user_points == 3) {
        statement.textContent = 'You Win!! Reload to play again';
        return;
    }
    if (comp_points == 3) {
        statement.textContent = 'You Lose.. Reload to play again';
        return;
    }

    var computer_choice = getComputerChoice();
    if (string === 'rock') {
        userdisplay.textContent = '✊';
    }
    if (string === 'paper') {
        userdisplay.textContent = '✋';
    }
    if (string === 'scissors') {
        userdisplay.textContent = '✌️';
    }

    userdisplay.style.fontSize = '100px';
    compareChoice(string, computer_choice);
    userpoints.textContent = user_points;
    comppoints.textContent = comp_points;

    if (user_points == 3) {
        statement.textContent = 'You Win!! Reload to play again';
        return;
    }
    if (comp_points == 3) {
        statement.textContent = 'You Lose.. Reload to play again';
        return;
    }

}

function compareChoice(userchoice, computer_choice) {
    if (userchoice == 'rock') {
        switch (computer_choice) {
            case 0:
                statement.textContent = 'Tie.';
                break;
            case 1:
                statement.textContent = 'Round lost, Paper beats Rock';
                comp_points += 1;
                break;

            case 2:
                statement.textContent = 'Round won! Rock beats scissors';
                user_points += 1;
                break;
        }
    }

    if (userchoice == 'paper') {
        switch (computer_choice) {
            case 0:
                statement.textContent = 'Round won! Paper beats rock';
                user_points += 1;
                break;
            case 1:
                statement.textContent = 'Tie.';
                break;
            case 2:
                statement.textContent = 'Round lost, scissors beats paper';
                comp_points += 1;
                break;
        }
    }

    if (userchoice == 'scissors') {
        switch (computer_choice) {
            case 0:
                statement.textContent = 'Round lost, Rock beats scissors';
                comp_points += 1;
                break;
            case 1:
                statement.textContent = 'Round won! Scissors beats paper';
                user_points += 1;
                break;

            case 2:
                statement.textContent = 'Tie.';
                break;
        }
    }

}
