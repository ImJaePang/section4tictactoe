import { useState } from "react";

const initialGameBoard = [
    [null, null, null]
    ,[null, null, null]
    ,[null, null, null]
];


export default function GameBoard(){

    const [gameBoard, setGameBoard] = useState(initialGameBoard);

    function handleSquare(rows, cols){

        setGameBoard((prevGameBoard) => {
            const presentGameBoard = [...prevGameBoard.map(innerArray => [...innerArray])];
            presentGameBoard[rows][cols] = "X";
            return presentGameBoard;
        });
    }

    return (
        <ol id="game-board">
            {gameBoard.map((row, rowIndex)=>(
                <li key={rowIndex}>
                    <ol>
                        {row.map((playerSelect, colIndex)=>(
                            <li key={colIndex}>
                                <button onClick={()=>handleSquare(rowIndex, colIndex)}>
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