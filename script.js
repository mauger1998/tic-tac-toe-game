const mainParent = document.querySelector(".appendBoardTo");


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
    console.log(squares)

    squares.forEach(square => {
        square.addEventListener("click", (e) => {
            
            if(gameModule.whosTurn == "playerOne" && square.textContent == "") {
                square.textContent = "x";
                updateArray()
                checkForWinner();
                gameModule.whosTurn = "playerTwo"
            } else if (gameModule.whosTurn == "playerTwo" && square.textContent == "") {
                square.textContent = "o";
                updateArray()
                checkForWinner();
                gameModule.whosTurn = "playerOne";
            }
            
        })
        
})

   



    function updateArray () {
        for (let i = 0; i < squares.length; i++ ) {
            gameModule.board[i] = squares[i].textContent
            console.log(gameModule)
        }
    }

    function checkForWinner() {
            if (gameModule.board[0] == "x" && gameModule.board[1] == "x" && gameModule.board[2] == "x") {
               console.log("x wins")
            } else if (gameModule.board[0] == "o" && gameModule.board[1] == "o" && gameModule.board[2] == "o") {
                console.log("o wins")
            } else if (gameModule.board[3] == "x" && gameModule.board[4] == "x" && gameModule.board[5] == "x") {
                console.log("x wins")
            } else if (gameModule.board[3] == "o" && gameModule.board[4] == "o" && gameModule.board[5] == "o") {
                console.log("o wins")
            } else if (gameModule.board[6] == "x" && gameModule.board[7] == "x" && gameModule.board[8] == "x") {
                console.log("x wins")
            } else if (gameModule.board[6] == "o" && gameModule.board[7] == "o" && gameModule.board[8] == "o") {
                console.log("o wins")
            } else if (gameModule.board[0] == "x" && gameModule.board[3] == "x" && gameModule.board[6] == "x") {
                console.log("x wins")
            } else if (gameModule.board[0] == "o" && gameModule.board[3] == "o" && gameModule.board[6] == "o") {
                console.log("o wins")
            } else if (gameModule.board[1] == "x" && gameModule.board[4] == "x" && gameModule.board[7] == "x") {
                console.log("x wins")
            } else if (gameModule.board[1] == "o" && gameModule.board[4] == "o" && gameModule.board[7] == "o") {
                console.log("o wins")
            } else if (gameModule.board[2] == "x" && gameModule.board[5] == "x" && gameModule.board[8] == "x") {
                console.log("x wins")
            } else if (gameModule.board[2] == "o" && gameModule.board[5] == "o" && gameModule.board[8] == "o") {
                console.log("o wins")
            } else if (gameModule.board[0] == "x" && gameModule.board[4] == "x" && gameModule.board[8] == "x") {
                console.log("x wins")
            } else if (gameModule.board[0] == "o" && gameModule.board[4] == "o" && gameModule.board[8] == "o") {
                console.log("o wins")
            } else if (gameModule.board[2] == "x" && gameModule.board[4] == "x" && gameModule.board[6] == "x") {
                console.log("x wins")
            } else if (gameModule.board[2] == "o" && gameModule.board[4] == "o" && gameModule.board[6] == "o") {
                console.log("o wins")
            }  else if (!gameModule.board.includes("")) {
                console.log("its a tie")
            }
}
})



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



