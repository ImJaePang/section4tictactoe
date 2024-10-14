export default function Log ({logs}){



    return(

    <ol id="log"  >
        {logs.map((gamelog)=>{

            const {square, gamePlayer} = gamelog;
            const {rowIndex, colIndex} = square;
            const keyVal = `{rowIndex}{colIndex}`;

            return (
                <li key={keyVal} >
                    {gamePlayer } play : {rowIndex}, {colIndex}
                </li>
            )

        })} 

    </ol>
    )
}

// const {square, gamePlayer} = gameTurn;
// const {rowIndex, colIndex} = square;