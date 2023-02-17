import React from 'react'

const TodoList = () => {
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

export default TodoList
