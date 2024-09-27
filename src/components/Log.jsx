export default function Log ({logs}){

    return(

    <ol id="log"  >
        <li>되는겨 마는겨</li>
        <li>되는겨 마는겨</li>
        <li>되는겨 마는겨</li>
        <li>되는겨 마는겨</li>

        {logs.map((gamelog)=>{
            // <li
            //     key={`${log.square.rowIndex}${log.square.colIndex}`
            // }>
            <li >
                {/* {log.gamePlayer} select {log.square.rowIndex},{log.square.colIndex} */}
                its ok?? {gamelog.gamePlayer}
            </li>
        })} 

    </ol>
    )
}

// const {square, gamePlayer} = gameTurn;
// const {rowIndex, colIndex} = square;