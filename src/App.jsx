import '@mantine/core/styles.css';
import { createTheme, MantineProvider } from '@mantine/core';
import { useState, useEffect } from 'react'
import './App.css'
import TodoItem from './components/TodoItem'
import TodoList from './components/TodoList';
import DeleteButton from './components/DeleteButton';

const theme = createTheme({
  /** Put your mantine theme override here */
});


function App() {
  const savedData = JSON.parse(localStorage.getItem('sortedData')); 

  const [input, setInput] = useState("")
  const [todos, setTodos] = useState(savedData ? savedData : [])

  useEffect(() => {
    saveData();
  }, [todos])

  const saveData = () => {
    const jsonString = JSON.stringify(todos, null, 2);
    localStorage.setItem('sortedData', jsonString);
  }

  const handleCheck = (updatedTodo) => {
    setTodos(todos.map(todo => todo.id === updatedTodo.id ? {...updatedTodo, checked: !updatedTodo.checked} : todo)
    .sort((a,b)=> a.checked === b.checked? a.id - b.id : a.checked - b.checked));
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
    <MantineProvider>
      <form onSubmit={handleSubmit}>
        <label htmlFor="input">Add: </label>
        <input type="text" id="input" onChange={(e) => setInput(e.target.value)} value={input}></input>
      </form>

      <TodoList todos={todos} handleCheck={handleCheck}/>

      <DeleteButton handleDelete={handleDelete} />

      </ MantineProvider>
  )
}

export default App
