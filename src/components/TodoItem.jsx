import React from 'react'
import { Checkbox } from '@mantine/core';

const TodoItem = ({ todo, onUpdate }) => {
    return (
        <Checkbox 
            id={todo.id} 
            size="xl"
            label={todo.body} 
            checked={todo.checked} 
            color="yellow"
            onChange={() => onUpdate(todo)} 
        />
    )
}

export default TodoItem