export default function GameOver({winner, hadleRematch}){

    return <div id="game-over">
        <h2>Game Over!</h2>
        {winner && <p>{winner} is winner!!</p>}
        {!winner && <p>it's draw</p>}

        <p>
            <button onClick={hadleRematch}>Rematch!</button>
        </p>
    </div>

}