function getComputerChoice() {
    var computer_choice = Math.floor(Math.random() * 3);
    return computer_choice;
}


function getUserChoice() {

    var user_choice = prompt("Enter your choice: ").toLowerCase();
    return user_choice;
}
let user_point = 0;
let computer_point = 0;
console.log("Prepare yourself human,first to 3 wins!");
while (user_point != 3 || computer_point != 3) {
    var computer_choice = getComputerChoice();
    var user_choice = getUserChoice();
    // 0 is rock;
    // 1 is paper;
    // 2 is scissors;
    switch (user_choice) {
        case "rock":
            if (computer_choice == 0) {
                console.log("Computer chose rock.. It's a tie");
            }
            else if (computer_choice == 1) {
                console.log("Computer chose paper.. You Lose! Paper beats rock");
                computer_point += 1;
            }
            else {
                console.log("Computer chose scissors.. You Win! Rock beats scissors");
                user_point += 1;
            }
            break;
        case "paper":
            if (computer_choice == 0) {
                console.log("Computer chose rock.. You Win! Paper beats rock");
                user_point += 1;
            }
            else if (computer_choice == 1) {
                console.log("Computer chose paper.. It's a tie");
            }
            else {
                console.log("Computer chose scissors.. You lose! scissors beats paper");
                computer_point += 1;
            }
            break;
        case "scissors":
            if (computer_choice == 0) {
                console.log("Computer chose rock.. You Lose! Rock beats scissors");
                computer_point += 1;
            }
            else if (computer_choice == 1) {
                console.log("Computer chose paper.. You Win! Scissors beats paper");
                user_point += 1;
            }
            else {
                console.log("Computer chose scissors.. It's a tie");
            }
            break;
        default:
            console.log("Invalid choice Mr.User");
            break;
    }
    console.log("Player point is: " + user_point + "\nComputer point is: " + computer_point);
    if (user_point == 3 || computer_point == 3) {
        break;
    }
}
if (user_point === 3) {
    console.log("Congratulations you beat the computer!");
}
else {
    console.log("You Lost sorry!");
}