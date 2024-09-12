import Player from "./components/Player";
import GameBoard from "./components/GameBoard";
import { useState } from "react";


function App() {

  const [playerTurn, setPlayerTurn] = useState("X");
  function handleSquareSymbol(){
    setPlayerTurn((prevSymbol) => (prevSymbol === "X" ? "O" : "X" ));
  }
  

  return (

    <main>
      <div id="game-container">
        <ol id="players" className="highlight-player">
          <Player name="Player1" symbol="X" isHighlight={playerTurn} />
          <Player name="Player2" symbol="O" isHighlight={playerTurn} />
          
        </ol>
        <GameBoard handleChangeSymbol={handleSquareSymbol} gamePlaySymbol={playerTurn}/>
      </div>

      LOG
    </main>
  )
}

export default App
