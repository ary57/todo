import { ActionIcon, TextInput, rem } from "@mantine/core";
import { IconCheck } from '@tabler/icons-react';


type todoType = {
    id: number;
    body: string;
    checked: boolean; 
}

export default function Todo({todo, handleCheck, todos, setTodos}:{todo:todoType, setInput:any, handleCheck:any, setTodos:any, todos:todoType[]}){
    return (
        <TextInput
            id= {""+todo.id}
            styles={{
                input:{outline: '4px solid black', fontFamily:'monospace', fontWeight:'bold', fontSize:'24px', textDecoration:(todo.checked ? 'line-through':'none'), textDecorationThickness:(todo.checked? '5px':'0px'), textDecorationColor:(todo.checked ? '#F08000':''), 
                },
            }}
            radius={"xs"}
            size={"lg"}
            value={todo.body}
            onChange={(e:any)=> setTodos(todos.map(orgTodo => orgTodo.id === todo.id ? {...todo, body:e.target.value} : orgTodo))}
            rightSectionWidth={42*2}
            rightSection={
                <div style={{display:'flex', gap: rem(12), paddingRight:"20%" }}>
                    <ActionIcon
                        onClick={() => {handleCheck(todo)}}
                        style={{outline: '2px solid black'}}
                        variant="outline" size={"lg"} radius="xs" 
                        color="black"
                        bg={todo.checked ? "orange" : "white"}
                    >
                        <IconCheck style={{ width: rem(32), height: rem(32),}} stroke={3} color={todo.checked ? "white" : "black"}/>
                        
                    </ActionIcon>
                </div>
            }
        /> 
    )
}