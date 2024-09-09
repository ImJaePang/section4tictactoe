import { useState } from "react"

export default function Player({name, symbol}){

    const [isEditing, setIsEditing] = useState(false);
    const isEditingFn = () =>{setIsEditing(!isEditing)}


    return(
        <li>
        <span className="player">
            <span className="player-name">{name}</span>
            <span className="player-symbol">{symbol}</span>
        </span>
        
        <button onClick>Edit</button>
        
    </li>
    )
}