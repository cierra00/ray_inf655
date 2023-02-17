import React, {useState} from 'react'

const TodoList = (props) => {
    const myTodoList = [];
    const [items, setItems] = useState();
const handleChange = (e)=> {
        setItems({myTodoList: myTodoList.push(items)});
   
}
const handleSubmit = (e)=> {
    e.preventDefault();
   
}
   
  
    return (
      <div className="App">
       <form>
        <label >Todo List</label>
        <input type="text" name="" required 
        value={items}
        onChange={handleChange}/>
        <button type="submit" onClick={handleSubmit} >Submit</button>
        <div>{items}</div>
        {props.name}
       </form>
 
      
      </div>
    );
}

export default TodoList
