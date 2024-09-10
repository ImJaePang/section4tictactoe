import { useState } from "react"

export default function Player({name, symbol}){

    const [isEditing, setIsEditing] = useState(false);
    const handleEditBtn = () =>{
        setIsEditing(!isEditing)
    };
    const [userName, setUserName] = useState(name);



    return(
        <li>
        <span className="player">
            {isEditing ?
                <input type="text" className="player-name" placeholder={userName}/>
                : <span className="player-name">{userName}</span>
            }
            <span className="player-symbol">{symbol}</span>
        </span>
        
            <button onClick={handleEditBtn} >
                {isEditing ? "Save" : "Edit"}
            </button>
            
        
        
    </li>
    )
}