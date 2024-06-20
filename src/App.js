import { useState } from 'react';
import './App.css';
import {v4 as uuidv4} from 'uuid';

function App() {
  const[todoList, setTodoList] = useState(["make bed", "walk dog", "wash dishes", "do homework", "do homework"])

  function addTodo(){
    setTodoList(todoList)
  }

  return (
    <div className="App">
      <form id="form">
        <label htmlFor="newTodo">Create a todo: </label>
        <input type="text" id="newTodo" name="todo" />
        <input type="submit" value="Submit" onClick={addTodo}/>
      </form>
      
      
      <ul>
      {todoList.map((todo) => {
        const id = uuidv4()
        return (
          <li key={uuidv4()}>
          <input type="checkbox" id={id}></input>
          <label htmlFor={id}>{todo}</label>
        </li>
        )
      })}
      </ul>



    </div>
  );
}

export default App;
