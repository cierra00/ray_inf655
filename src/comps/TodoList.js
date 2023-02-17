


const TodoList = ({newItem, setNewItem, addItem, items, handleCheck}) => {
   

  return (

      <div>
          
     
     
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
