
    

const playArray = ["rock", "paper", "scissors"]

function computerPlay() {
    return playArray[Math.floor(Math.random()*playArray.length)]

}

function playRound(playerSelection, computerSelection) {

function playerPlay() {
    if (choices === rock) {

    }
    if (choices === paper) {


}
}

    
    if (playerSelection === "rock" && computerSelection === "rock") {
        return " The computer picked rock. It's a tie."}

    else if (playerSelection === "rock" && computerSelection === "scissors") {
        return "The computer picked scissors. You won!"
    }
    else if (playerSelection === "rock" && computerSelection === "paper"){
        return "The computer picked paper. You lost!"}



    else if (playerSelection === "paper" && computerSelection === "paper") {
        return "The computer picked paper. It's a tie."
    }

    else if (playerSelection === "paper" && computerSelection === "rock"){
        return "The computer picked rock. You won!"}
    
    else if (playerSelection === "paper" && computerSelection === "scissors")
        {return "The computer picked scissors. You lost!"}
    
    else if (playerSelection === "scissors" && computerSelection === "scissors") {
        return "The computer picked scissors. It's a tie."
    }

    else if (playerSelection === "scissors" && computerSelection === "paper" ){
        return "The computer picked paper. You won!"}
    
    else if(playerSelection === "scissors" && computerSelection === "rock"){
        return "The computer picked rock. You lost!"}
    
    else {
        return "You can only pick rock, paper, or scissors!"
    }

    
    
}       


const roundOutcome = document.querySelector("#outcome-text")
const playerScore = document.querySelector("#playerScore")
const computerScore = document.querySelector("#computerScore")
 playerScore.textContent = 0
 computerScore.textContent = 0

 const choices = Array.from(document.querySelectorAll(".choice"));
 

choices.forEach(choice => choice.addEventListener("click",  function()
{ 
    function getID(clicked_id)
    alert(clicked_id)


    playerChoice = 
    playerPlay(playerChoice)}))

computerSelection = computerPlay()


RoundOutcome = playRound(playerSelection, computerSelection)



playConditionals (RoundOutcome)
{


    if (RoundOutcome.includes("won") === true){
        playerScore.textContent++

    }

    else if (RoundOutcome.includes("lost") === true){
        computerScore.textContent++

    }

    else {playerScore.textContent++, computerScore.textContent++}


}

