import Player from "./components/Player";
import GameBoard from "./components/GameBoard";
import Log from "./components/Log"
import { useState } from "react";


function App() {

  const [playerTurn, setPlayerTurn] = useState("X");
  function handleSquareSymbol(){
    setPlayerTurn((prevSymbol) => (prevSymbol === "X" ? "O" : "X" ));
  }
  const [gamePlay, setGamePlay] = useState([]);

  function onHandleSquare(row, col){

    //alert(row + col);

    setGamePlay((prevGamePlay) =>{

      let playerSymbol = "X";

      if(prevGamePlay.length > 0 && prevGamePlay[0].gamePlayer === "X"){
        playerSymbol = "O";
      }

      //alert(row + col);

      const currentGamePlay = [{square : {rowIndex : row, colIndex : col}, gamePlayer : playerSymbol },...prevGamePlay];

      return currentGamePlay;
    });

  }
  

  return (

    <main>
      <div id="game-container">
        <ol id="players" className="highlight-player">
          <Player name="Player1" symbol="X" isHighlight={playerTurn} />
          <Player name="Player2" symbol="O" isHighlight={playerTurn} />
          
        </ol>
        <GameBoard onChangeSquare={onHandleSquare} gameTurns={gamePlay}/>
      </div>

      <Log/>

    </main>
  )
}

export default App
