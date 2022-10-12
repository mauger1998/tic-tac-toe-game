const mainParent = document.querySelector(".appendBoardTo");
const startButton = document.getElementById("start");
const resetButton = document.querySelector("#reset");


/*Gameboard Object (Module)*/
 let gameBoardModule = (() => {
    let gameBoard = {
            board: [
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            ""

        ],
        whosTurn: "playerOne",

           
    } 
    return gameBoard;
 })();


/*Player Factories*/

let playerFactory = (name, marker) => {
    return {name, marker}
}




/* Game */
const game = ((gameModule) => {

    const playerOne = playerFactory("Player One", "x");
    const playerTwo = playerFactory("Player Two", "o");

    let activePlayer = playerOne;
    let winnderDeclared = false;
    let remainingSpots = 9;

    let winningPatterns = [
        [0,1,2],
        [3,4,5],
        [6,7,8],
        [0,3,6],
        [1,4,7],
        [2,5,8],
        [0,4,8],
        [2,4,6],
    ]

    let squares = document.querySelectorAll(".squares");
    

    squares.forEach(square => {
        square.addEventListener("click", (e) => {
            
            if(gameModule.whosTurn == "playerOne" && square.textContent == "") {
                square.textContent = "x";
                updateArray()
                checkForWinner();
                displayWinner();
                gameModule.whosTurn = "playerTwo"
            } else if (gameModule.whosTurn == "playerTwo" && square.textContent == "") {
                square.textContent = "o";
                updateArray()
                checkForWinner();
                displayWinner();
                gameModule.whosTurn = "playerOne";
            }
            
        })

        
})

   



    function updateArray () {
        for (let i = 0; i < squares.length; i++ ) {
            gameModule.board[i] = squares[i].textContent
            
        }
    }

    function checkForWinner() {
            if (gameModule.board[0] == "x" && gameModule.board[1] == "x" && gameModule.board[2] == "x") {
               let winnerInput = "x"
               displayWinner(winnerInput)
            } else if (gameModule.board[0] == "o" && gameModule.board[1] == "o" && gameModule.board[2] == "o") {
                let winnerInput = "o"
                displayWinner(winnerInput)
            } else if (gameModule.board[3] == "x" && gameModule.board[4] == "x" && gameModule.board[5] == "x") {
                let winnerInput = "x"
                displayWinner(winnerInput)
            } else if (gameModule.board[3] == "o" && gameModule.board[4] == "o" && gameModule.board[5] == "o") {
                let winnerInput = "o"
                displayWinner(winnerInput)
            } else if (gameModule.board[6] == "x" && gameModule.board[7] == "x" && gameModule.board[8] == "x") {
                let winnerInput = "x"
                displayWinner(winnerInput)
            } else if (gameModule.board[6] == "o" && gameModule.board[7] == "o" && gameModule.board[8] == "o") {
                let winnerInput = "o"
                displayWinner(winnerInput)
            } else if (gameModule.board[0] == "x" && gameModule.board[3] == "x" && gameModule.board[6] == "x") {
                let winnerInput = "x"
                displayWinner(winnerInput)
            } else if (gameModule.board[0] == "o" && gameModule.board[3] == "o" && gameModule.board[6] == "o") {
                let winnerInput = "o"
                displayWinner(winnerInput)
            } else if (gameModule.board[1] == "x" && gameModule.board[4] == "x" && gameModule.board[7] == "x") {
                let winnerInput = "x"
                displayWinner(winnerInput)
            } else if (gameModule.board[1] == "o" && gameModule.board[4] == "o" && gameModule.board[7] == "o") {
                let winnerInput = "o"
                displayWinner(winnerInput)
            } else if (gameModule.board[2] == "x" && gameModule.board[5] == "x" && gameModule.board[8] == "x") {
                let winnerInput = "x"
                displayWinner(winnerInput)
            } else if (gameModule.board[2] == "o" && gameModule.board[5] == "o" && gameModule.board[8] == "o") {
                let winnerInput = "o"
                displayWinner(winnerInput)
            } else if (gameModule.board[0] == "x" && gameModule.board[4] == "x" && gameModule.board[8] == "x") {
                let winnerInput = "x"
                displayWinner(winnerInput)
            } else if (gameModule.board[0] == "o" && gameModule.board[4] == "o" && gameModule.board[8] == "o") {
                let winnerInput = "o"
                displayWinner(winnerInput)
            } else if (gameModule.board[2] == "x" && gameModule.board[4] == "x" && gameModule.board[6] == "x") {
                let winnerInput = "x"
                displayWinner(winnerInput)
            } else if (gameModule.board[2] == "o" && gameModule.board[4] == "o" && gameModule.board[6] == "o") {
                let winnerInput = "o"
                displayWinner(winnerInput)
            }  else if (!gameModule.board.includes("")) {
                let winnerInput = "its a tie"
                displayWinner(winnerInput)
            }
            
         
}
})


function displayWinner(winnerInput) {
    if (winnerInput == "x" ) {
        let winnerAnnouncement = document.createElement("div")
        winnerAnnouncement.textContent = "x is the winner"
        mainParent.appendChild(winnerAnnouncement)
        winnerAnnouncement.classList.add("absolute")
        
    } else if (winnerInput == "o") {
        let winnerAnnouncement = document.createElement("div")
        winnerAnnouncement.textContent = "o is the winner"
        mainParent.appendChild(winnerAnnouncement)
        winnerAnnouncement.classList.add("absolute")
    } else if (winnerInput == "its a tie") {
        let winnerAnnouncement = document.createElement("div")
        winnerAnnouncement.textContent = "its a tie, play again?"
        mainParent.appendChild(winnerAnnouncement)
        winnerAnnouncement.classList.add("absolute")
    }

}



/*Gameboard Render Function*/

function renderBoard (boardModule) {
    for (let i = 0; i < boardModule.board.length; i++) {
        let newSquare = document.createElement("div");
        mainParent.appendChild(newSquare);
        newSquare.textContent = boardModule.board[i];
        mainParent.classList.add("grid");
        newSquare.classList.add("squares");
        newSquare.classList.add("border");
        newSquare.setAttribute("id", `square${i}` )
    } 
    game(gameBoardModule)
}

function startGame() {
    gameBoardModule.board = [
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        ""

    ]
    gameBoardModule.whosTurn = "playerOne"
    renderBoard(gameBoardModule);
}

/*Global Code*/

startButton.addEventListener("click", (e) => {
    
    startGame()
    startButton.classList.add("dissapear")
})

resetButton.addEventListener("click", (e) => {
    mainParent.innerHTML = "";
    startButton.classList.remove("dissapear")
})



