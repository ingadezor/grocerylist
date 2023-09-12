import React from "react"
import Item from "./Item"



function ItemList({items, removeItem, editItem}){

    return <div className="items">
        {
            items.map( (item)=>{
                return <Item key={item.id} {...item} removeItem={removeItem} editItem={editItem}/>
            })
        }

    </div>

}

export default ItemList