import { useState } from 'react'
import Form from "./Form"
import { ToastContainer } from 'react-toastify';
import {nanoid} from "nanoid"
import ItemList from "./ItemList"


//keep info locally using "localStorage" obj provided by browser.
//makes sure that user info is not lost if changes pages

// function getLocalStorage(){
//   if(localStorage.getItem("list")){
//     return JSON.parse(localStorage.getItem("list") );
//   }
// }


function App() {
  const [items, setItems] = useState( JSON.parse(localStorage.getItem("list") || '[]'));


  //ADD ITEM
  function addItem(newItem){
    let item = {
      id: nanoid(),
      name: newItem,
      isCompleted: false
    }


    const newItems = [...items, item];

    setItems(newItems);
    localStorage.setItem("list", JSON.stringify(newItems));
  }



  //REMOVE ITEM
  function removeItem(itemId){
    const newItems = items.filter((item) =>{
      return item.id != itemId;
    })

    setItems(newItems);
    localStorage.setItem("list", JSON.stringify(newItems));
  }


  //EDIT CHECKED item
  function editItem(itemId){
    const newItems = items.map( (item)=>{
      if(item.id == itemId) item.isCompleted = !item.isCompleted;
      return item;  
    })

    //console.log(newItems);

    setItems(newItems);
    localStorage.setItem("list", JSON.stringify(newItems));
  }



  return <main className="section-center">
      <Form addItem={addItem}/>

      <ItemList items={items} removeItem={removeItem} editItem={editItem}/>


      <ToastContainer position="top-right" />
  </main>
}

export default App
