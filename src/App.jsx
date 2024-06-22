import '@mantine/core/styles.css';
import { createTheme, MantineProvider, Container } from '@mantine/core';
import { useState, useEffect } from 'react'
import './App.css'
import TodoList from './components/TodoList';
import DeleteButton from './components/DeleteButton';
import InputForm from './components/InputForm'
import Header from './components/Header'
import cx from 'clsx';


const theme = createTheme({
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
    
    <MantineProvider theme={theme}>
      <Container size="responsive" bg="var(--mantine-color-pink-light)">
      <Header />
      <InputForm handleSubmit={handleSubmit} input={input} setInput={setInput}/>
      <TodoList todos={todos} handleCheck={handleCheck}/>
      <DeleteButton handleDelete={handleDelete} />
      </Container>
      
      </ MantineProvider>
  )
}

export default App
