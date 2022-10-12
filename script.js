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




/*Gameboard Render Function*/

function renderBoard (boardModule) {
    for (let i = 0; i < boardModule.board.length; i++) {
        let newSquare = document.createElement("div");
        mainParent.appendChild(newSquare);
        newSquare.textContent = boardModule.board[i];
        mainParent.classList.add("grid");
    }
}

