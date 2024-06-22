import React from 'react'
import { Stack, Button } from '@mantine/core';
import TodoItem from './TodoItem'

const TodoList = ({ todos, handleCheck }) => {
    return (
        <Stack
            h={300}
            bg="var(--mantine-color-body)"
            align="stretch"
            justify="center"
            gap="md"
        >
            {todos.map((todo) =>
                <TodoItem key={todo.id} todo={todo} onUpdate={handleCheck} />
            )}
        </Stack>
    );
}

export default TodoList