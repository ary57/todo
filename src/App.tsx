import "@mantine/core/styles.css";
import { Button, Container, Divider, MantineProvider, Stack } from "@mantine/core";
import { theme } from "./theme";
import { useState } from "react";
import TodoInput from "./components/todoInput";
import Todo from './components/todo';
type todoType = {
  id: number;
  body: string;
  checked: boolean; 
}

const App = () => {
  const [input, setInput] = useState('');
  const [todos, setTodos] = useState<todoType[]>([]);

  const handleDelete = (e:any) => {
    e.preventDefault();
    setTodos(todos.filter(todo => !todo.checked));
  }

  const handleAdd = (e:any) => {
    e.preventDefault();
    setTodos([...todos, {id:todos.length, body:input, checked:false}].sort((a:todoType,b:todoType)=> b.id-a.id));
    setInput("");
  }

  const handleCheck = (updatedTodo:todoType) => {
    setTodos(todos.map(todo => todo.id === updatedTodo.id ? {...updatedTodo, checked: !updatedTodo.checked} : todo))
  }

  return (
  <MantineProvider theme={theme}>
    <Container style={{outline:"4px solid black", padding: "2%", marginTop:"5%"}}>
      <TodoInput handleAdd={handleAdd} input={input} setInput={setInput}/>
      <Divider style={{padding: "2%"}} my="md" size="lg" />
      <Stack>
      {todos.filter(todo => !todo.checked).map((todo:todoType) => <Todo key={todo.id} todo={todo} handleCheck={handleCheck} setTodos={setTodos} todos={todos}/>)}
      </Stack>
      <Divider style={{padding: "2%"}} my="xl" size="md" />
      <Stack>
      {todos.filter(todo => todo.checked).map((todo:todoType) => <Todo key={todo.id} todo={todo} handleCheck={handleCheck} setTodos={setTodos} todos={todos}/>)}
      </Stack>
      <Button
        variant="outline" color="black" radius="xs"
        style={{outline:"4px solid black", display:"flex", marginLeft:"88%", marginTop:"5%", fontFamily:"monospace", fontSize:"24px", background:"pink"}}
        onClick={handleDelete}
      >Clear</Button>
    </Container>
  </MantineProvider>);
}

export default App