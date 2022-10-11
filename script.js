const mainParent = document.querySelector(".appendBoardTo");


/*Gameboard Object (Module)*/

const gameBoard = new Array ("x", "o", "x", "o", "x", "o", "x", "o", "x" )

    






/* Players Objects (Factories) */
const playerFactory = (name, token) => {
    const player = {
        name,
        token

    }
    return player;
} 



/*Flow Object */



/*Gameboard Render Function*/
function renderGameBoard(gameBoard) {
    for (let i = 0; i < 9; i++) {
        let newSpace = document.createElement("div");
        mainParent.appendChild(newSpace);
        newSpace.textContent = gameBoard[i];
        mainParent.classList.add("grid");
        console.log(gameBoard[i])

    } 
    return;
    
};
renderGameBoard(gameBoard);
