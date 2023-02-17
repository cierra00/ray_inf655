
import TodoList from './TodoList'
import { useState} from 'react'




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
         
        }
        
        const handleCheck = (id) => {
         const listItems = items.map((item) => item.id === id ? { ...item, checked: !item.checked } : item);
         setItems(listItems);
         localStorage.setItem('shoppinglist', JSON.stringify(listItems));
     } 

  return (

      <div>
     <h1>Todo List</h1>
     <input 
     type="text"
     placeholder='Add an Item...'
     value={newItem}
     onChange={e => setNewItem(e.target.value)} />
     
     <button onClick ={()=> addItem()}>Add</button>
     
     
     <TodoList 
     items={items}
     newItem={newItem}
     handleCheck={handleCheck}
     setNewItem={setNewItem}
     addItem={addItem}

     />
     
    </div>
  )
}

export default TodoApp
