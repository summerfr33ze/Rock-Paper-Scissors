




    

const playArray = ["rock", "paper", "scissors"]

function computerPlay() {
    return playArray[Math.floor(Math.random()*playArray.length)]

}

function playRound(playerSelection, computerSelection) {

    

    
    if (playerSelection === "rock" && computerSelection === "rock") {
        return " The computer picked rock. It's a tie."}

    else if (playerSelection === "rock" && computerSelection === "scissors") {
        return "The computer picked scissors. You won the round!"
    }
    else if (playerSelection === "rock" && computerSelection === "paper"){
        return "The computer picked paper. You lost the round!"}



    else if (playerSelection === "paper" && computerSelection === "paper") {
        return "The computer picked paper. It's a tie."
    }

    else if (playerSelection === "paper" && computerSelection === "rock"){
        return "The computer picked rock. You won the round!"}
    
    else if (playerSelection === "paper" && computerSelection === "scissors")
        {return "The computer picked scissors. You lost the round!"}
    
    else if (playerSelection === "scissors" && computerSelection === "scissors") {
        return "The computer picked scissors. It's a tie."
    }

    else if (playerSelection === "scissors" && computerSelection === "paper" ){
        return "The computer picked paper. You won the round!"}
    
    else if(playerSelection === "scissors" && computerSelection === "rock"){
        return "The computer picked rock. You lost the round!"}
    
    else {
        return "You can only pick rock, paper, or scissors!"
    }

    
    
}       

const rockButton = document.querySelector ("#rock")
const paperButton = document.querySelector ("#paper")
const scissorsButton = document.querySelector ("#scissors")
const buttons = document.querySelectorAll ("button")
const roundOutcome = document.querySelector("#outcome-text")
const playerScore = document.querySelector("#playerScore")
const computerScore = document.querySelector("#computerScore")
const displayWinner = document.querySelector("#displayWinner")


playerScore.textContent = 0
computerScore.textContent = 0
displayWinner.textContent= ""


rockButton.addEventListener("click", (e) => {
    const computerSelection = computerPlay()
    const playerSelection = "rock"
    roundOutcome.textContent = (playRound(playerSelection, computerSelection))
    let currentRoundOutcome = roundOutcome.textContent
     playConditionals(currentRoundOutcome)
    
  })
    

paperButton.addEventListener("click", (e) => {
    const computerSelection = computerPlay()
    const playerSelection = "paper"
    roundOutcome.textContent = (playRound(playerSelection,computerSelection))
    let currentRoundOutcome = roundOutcome.textContent
    playConditionals(currentRoundOutcome)
    
}) 

scissorsButton.addEventListener
("click", (e) => {
    const computerSelection = computerPlay()
    const playerSelection = "scissors"
    roundOutcome.textContent = (playRound(playerSelection, computerSelection))
    let currentRoundOutcome = roundOutcome.textContent
     playConditionals(currentRoundOutcome)
    
})


    
    
t


function playConditionals(currentRoundOutcome) {
    if (playerScore.textContent < 4 && currentRoundOutcome.includes("won") === true){
        playerScore.textContent++
    }

    else if (computerScore.textContent < 4 && currentRoundOutcome.includes("lost") === true) {
        computerScore.textContent++

    }

    else if (playerScore.textContent == 4 && currentRoundOutcome.includes("won") === true){
      playerScore.textContent++, displayWinner.textContent = "Player Wins!"
        
    }

    else if (computerScore.textContent == 4 && currentRoundOutcome.includes("lost") === true){
        computerScore.textContent++, displayWinner.textContent = "Computer Wins"
    }
    
    else { return }

}







   

                
          



        
        