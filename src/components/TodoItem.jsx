import React from 'react'
import { Checkbox } from '@mantine/core';

const TodoItem = ({ todo, onUpdate }) => {
    return (
        <Checkbox 
            id={todo.id} 
            label={todo.body} 
            checked={todo.checked} 
            color="orange"
            onChange={() => onUpdate(todo)} 
        />
    )
}

export default TodoItem