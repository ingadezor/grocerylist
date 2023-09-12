import React from "react"
import {toast} from "react-toastify"


function Form({addItem}){
    const [newItem, setNewItem] = React.useState('');

 
    //Adding new item to the list of items
    function handleSubmit(e){
        e.preventDefault();

        if(newItem){
         addItem(newItem);
         setNewItem("");
         toast.success("Item added to the cart")
        }
        else return;
    }


    return <div>

        <form onSubmit={handleSubmit}>
            <h4>My Grocery List</h4>
            
            <div className="form-control">
                <input type="text" onChange={ (e)=>{setNewItem(e.target.value)}} className="form-input" value={newItem}/>
                <button type="submit" className="btn">Add</button>

            </div>

        </form>


    </div>
}   


export default Form