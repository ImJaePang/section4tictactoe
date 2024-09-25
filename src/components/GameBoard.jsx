import { useState } from "react";

const initialGameBoard = [
    [null, null, null]
    ,[null, null, null]
    ,[null, null, null]
];


export default function GameBoard({onHandleSquare, gameTurns}){

    // const [gameBoard, setGameBoard] = useState(initialGameBoard);

    // function handleSquare(rows, cols){

    //     setGameBoard((prevGameBoard) => {
    //         const presentGameBoard = [...prevGameBoard.map(innerArray => [...innerArray])];
    //         presentGameBoard[rows][cols] = gamePlaySymbol;
    //         return presentGameBoard;
    //     });

    //     handleChangeSymbol();


    let gameBoard = initialGameBoard;

    for(const gameTurn of gameTurns){
        const {square, gamePlayer} = gameTurn;
        const {rowIndex, colIndex} = square;

        gameBoard[rowIndex][colIndex] = gamePlayer;
    }

    return (
        <ol id="game-board">
            {gameBoard.map((row, rowIndex)=>(
                <li key={rowIndex}>
                    <ol>
                        {row.map((playerSelect, colIndex)=>(
                            <li key={colIndex}>
                                <button onClick={()=>onHandleSquare(rowIndex,colIndex)}>
                                    {playerSelect}
                                </button>
                            </li>
                        ))}
                    </ol>
                </li>
            ))}
        </ol>
    )
        
    

}