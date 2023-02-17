import React, {useState} from 'react'



const TodoApp = () => {
    const [newItem, setNewItem] = useState("");
   const [items, setItems] = useState([]);
   
   
   function addItem() {
    const item = {
      id: Math.floor(Math.random() * 1000),
      value: newItem,
      checked: false
    };

    
   
    setItems(oldList => [...oldList, item]);
    setNewItem("");
    console.log(item);
   }
   
   const handleCheck = (id) => {
    const listItems = items.map((item) => item.id === id ? { ...item, checked: !item.checked } : item);
    setItems(listItems);
    localStorage.setItem('shoppinglist', JSON.stringify(listItems));
}

  return (

      <div>
     
     
     <input 
     type="text"
     placeholder='Add an Item...'
     value={newItem}
     onChange={e => setNewItem(e.target.value)} />
     
     <button onClick ={()=> addItem()}>Add</button>
     
     <ul>
      {items.map(item=>{
        return(
          <li key={item.id}>
            <div><input type="checkbox"
             onChange={() => handleCheck(item.id)}
             checked={item.checked}
             />
            <label style= {(item.checked)? {textDecoration: 'line-through'} : null}>{item.value}</label>
            </div>
            </li>
        )
      })}
     </ul>
    </div>
  )
}

export default TodoApp
