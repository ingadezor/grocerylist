import React from "react"
import {MdDelete} from "react-icons/md"

function Item({id, name, isCompleted, removeItem, editItem}){
    //const [isChecked, setIsChecked] = React.useState(isCompleted);

    

    return <div className="single-item" >
        <input type="checkbox" checked={isCompleted} onChange={()=>{editItem(id)}}/>
        
        <p style={isCompleted ? {textDecoration : "line-through"} : null}>{name}</p>
        
        <button className="btn remove-btn" onClick={()=>{removeItem(id)}}><MdDelete /></button>
    </div>
}


export default Item