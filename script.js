const mainParent = document.querySelector(".appendBoardTo");


/*Gameboard Object (Module)*/
 let gameBoardModule = (() => {
    let gameBoard = {
            board: [
            "x",
            "o",
            "x",
            "o",
            "x",
            "o",
            "x",
            "o",
            "x"

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
const game = (() => {

    const playerOne = playerFactory("Player One", "x");
    const playerTwo = playerFactory("Player Two", "o");

    let activePlayer = playerOne;
    let winnderDeclared = false;
    let remainingSpots = 9;

    let squares = document.querySelectorAll(".squares");
    console.log(squares)

    squares.forEach(square => {
        square.addEventListener("click", (e) => {
            console.log("square")
        })
    
})

})



/*Gameboard Render Function*/

function renderBoard (boardModule) {
    for (let i = 0; i < boardModule.board.length; i++) {
        let newSquare = document.createElement("div");
        mainParent.appendChild(newSquare);
        newSquare.textContent = boardModule.board[i];
        mainParent.classList.add("grid");
        newSquare.classList.add("squares")
    } 
    game();
}

