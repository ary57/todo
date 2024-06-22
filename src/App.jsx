import { useState } from 'react'
import './App.css'
import TodoItem from './components/TodoItem'

function App() {
  const sampleTodos = []

  const [input, setInput] = useState("")
  const [todos, setTodos] = useState(sampleTodos)

  const handleCheck = (updatedTodo) => {
    setTodos(todos.map(todo => todo.id === updatedTodo.id ? {...updatedTodo, checked: !updatedTodo.checked} : todo));
    
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    (input.replace(/\s/g, '').length === 0 ) ? null : setTodos([...todos, {id:todos.length, body:input, checked:false}])
    setInput("")
  }

  const handleDelete = (e) => {
    e.preventDefault();
    setTodos(todos.filter(todo => !todo.checked))
  }


  return (
    <>
      <form onSubmit={handleSubmit}>
        <label htmlFor="input">Add: </label>
        <input type="text" id="input" onChange={(e) => setInput(e.target.value)} value={input}></input>
      </form>

      <ul>
        {todos.map((todo) =>
          <li key={todo.id}> <TodoItem todo={todo} onUpdate={handleCheck}/>
          </li>)}
      </ul>

      <form onSubmit={handleDelete}>
        <input type="button" id="deleteButton" onClick={handleDelete} value={"Delete Checked"} />
      </form>

    </>
  )
}

export default App
