/*Gameboard Object (Module)*/

const gameBoardModule = () => {
    const gameBoard = ["x", "o", "x", "o", "x", "o", "x", "o", "x" ]

    return {gameBoard}
}

gameBoardModule();



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
//function renderGameBoard