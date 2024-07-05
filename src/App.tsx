import "@mantine/core/styles.css";
import { MantineProvider, Stack, Container, Divider, Button } from "@mantine/core";
import { theme } from "./theme";
import TodoInput from "./components/todoInput";
import Todo from "./components/todo";
import { useState, useEffect } from "react";
import "./App.css"


type todoType = {
  id: number;
  body: string;
  checked: boolean; 
  editing: boolean;
}

export default function App() {
  const storedDataFile = "TodoStoredData"
  const savedData:any = JSON.parse(localStorage.getItem(storedDataFile) || '{}');

  const [input, setInput] = useState("");
  const [todos, setTodos] = useState<todoType[]>(savedData ? savedData : [])

  useEffect(() => {
    saveData();
  }, [todos])

  const saveData = () => {
    const jsonString = JSON.stringify(todos, null, 2);
    localStorage.setItem(storedDataFile, jsonString);
  }

  function handleAdd(e:any){
    e.preventDefault();
    setTodos([...todos, {id:todos.length, body:input, checked:false, editing:false}]);
    setInput("");
  }

  function handleCheck(updatedTodo:todoType){
    setTodos(todos.map(todo => todo.id === updatedTodo.id ? {...updatedTodo, checked: !updatedTodo.checked} : todo)
    .sort((a:todoType,b:todoType)=> a.id-b.id));
  }

  function handleDelete(e:any){
    e.preventDefault();
    setTodos(todos.filter(todo => !todo.checked))
  }

  return (
    <MantineProvider theme={theme}>
      <Container style={{outline:'4px solid black', padding: "2%", marginTop:"5%"}}>
        <TodoInput handleAdd={handleAdd} input={input} setInput={setInput}/>
        <Divider style={{padding: "2%"}} my = "md" size="lg" />
        <Stack>
          {todos.filter(todo => !todo.checked).map((todo:todoType) => <Todo key={todo.id} todo={todo} setInput={setInput} handleCheck={handleCheck} setTodos={setTodos} todos={todos}/>)}
        </Stack>
        <Divider style={{padding: "2%"}} my="xl" size="md" />
        <Stack>
        {todos.filter(todo => todo.checked).map((todo:todoType) => <Todo key={todo.id} todo={todo} setInput={setInput} handleCheck={handleCheck} setTodos={setTodos} todos={todos}/>)}
        </Stack>
        <Button 
          variant="outline" color="black" radius={"xs"} 
          style={{outline:"4px solid black", display:"flex", marginLeft:"88%", marginTop:"5%", fontFamily:"monospace", fontSize:"24px", background:"pink"}}
          onClick={handleDelete}
          >Clear</Button>
      </Container>
    </MantineProvider>
  );
}
