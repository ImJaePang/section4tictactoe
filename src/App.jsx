import Player from "./components/Player";
import GameBoard from "./components/GameBoard";
import Log from "./components/Log"
import { useState } from "react";
import {WINNING_COMBINATION} from "./components/winning-combination.js";

const initialGameBoard = [
  [null, null, null]
  ,[null, null, null]
  ,[null, null, null]
];

function symbolChange(theGame){

  let playerSymbol = "X";

  if(theGame.length > 0 && theGame[0].gamePlayer === "X"){
    playerSymbol = "O";
  }

  return playerSymbol;
}


function App() {

  const [gamePlay, setGamePlay] = useState([]);

  let playerSymbol = symbolChange(gamePlay);


  let gameBoard = initialGameBoard;

  for(const gameTurn of gamePlay){
      const {square, gamePlayer} = gameTurn;
      const {rowIndex, colIndex} = square;

      gameBoard[rowIndex][colIndex] = gamePlayer;
  }


  function onHandleSquare(row, col){

    setGamePlay((prevGamePlay) =>{

      let playerSymbol = symbolChange(prevGamePlay);

      //alert(row + col);

      const currentGamePlay = [{square : {rowIndex : row, colIndex : col}, gamePlayer : playerSymbol },...prevGamePlay];

      return currentGamePlay;
    });

  }
  

  return (

    <main>
      <div id="game-container">
        <ol id="players" className="highlight-player">
          <Player name="Player1" symbol="X" isHighlight={playerSymbol} />
          <Player name="Player2" symbol="O" isHighlight={playerSymbol} />
          
        </ol>
        <GameBoard onChangeSquare={onHandleSquare} board={gameBoard}/>
      </div>

      <Log logs={gamePlay} />

    </main>
  )
}

export default App
