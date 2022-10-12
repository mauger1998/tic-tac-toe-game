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

    let squares = document.querySelectorAll(".squares");
    console.log(squares)

    squares.forEach(square => {
        square.addEventListener("click", (e) => {
            checkForWinner();
            if(gameModule.whosTurn == "playerOne" && square.textContent == "") {
                square.textContent = "x";
                updateArray()
                gameModule.whosTurn = "playerTwo"
            } else if (gameModule.whosTurn == "playerTwo" && square.textContent == "") {
                square.textContent = "o";
                updateArray()
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



