import { useState } from "react"

export default function Player({name, symbol}){

    const [isEditing, setIsEditing] = useState(false);
    const handleEditBtn = () =>{
        setIsEditing(!isEditing)
    };
    const [userName, setUserName] = useState(name);

    let PlayerName = <span className="player-name">{userName}</span>;
    if (isEditing){
        PlayerName = <input type="text" required placeholder={userName}/>;
    }

    return(
    <li>
        <span className="player">
            {PlayerName}
            <span className="player-symbol">{symbol}</span>
        </span>
        
        <button onClick={handleEditBtn} >
            {isEditing ? "Save" : "Edit"}
        </button>
            
        
        
    </li>
    )
}