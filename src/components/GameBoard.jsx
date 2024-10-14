import { useState } from "react";




export default function GameBoard({onChangeSquare, board}){



    return (
        <ol id="game-board">
            {board.map((row, rowIndex)=>(
                <li key={rowIndex}>
                    <ol>
                        {row.map((playerSelect, colIndex)=>(
                            <li key={colIndex}>
                                <button onClick={()=>onChangeSquare(rowIndex, colIndex)} disabled={playerSelect !== null}>
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