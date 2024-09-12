import { useState } from "react"

export default function Player({name, symbol, isHighlight}){

    const [isEditing, setIsEditing] = useState(false);
    function handleEditBtn (){
        setIsEditing((editing)=>!editing);
    };
    const [userName, setUserName] = useState(name);
    function handleChange(event){
        setUserName(event.target.value);
    }

    let PlayerName = <span className="player-name">{userName}</span>;
    if (isEditing){
        PlayerName = <input type="text" required value={userName} onChange={handleChange}/>;
    }

    return(
    <li className={isHighlight === symbol ? "active" : undefined}>
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