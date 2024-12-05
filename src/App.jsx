import Player from "./components/Player";
import GameBoard from "./components/GameBoard";
import Log from "./components/Log"
import { useState } from "react";
import { WINNING_COMBINATIONS } from "./components/winning-combination.js";
import GameOver from "./components/GameOver";

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

  let winningParam;


  for (const combination of WINNING_COMBINATIONS){

    const comb1 = gameBoard[combination[0].row][combination[0].column]; 
    const comb2 = gameBoard[combination[1].row][combination[1].column]; 
    const comb3 = gameBoard[combination[2].row][combination[2].column];
    
    if(comb1 && comb1 === comb2 && comb1 && comb3){
      winningParam = comb1;
    }
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

        {winningParam && <GameOver winner={winningParam}  />}

        <GameBoard onChangeSquare={onHandleSquare} board={gameBoard}/>
      </div>

      <Log logs={gamePlay} />
    </main>
  )
}

export default App
