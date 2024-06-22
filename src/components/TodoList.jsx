import React from 'react'
import { Stack, Container } from '@mantine/core';
import TodoItem from './TodoItem'

const TodoList = ({ todos, handleCheck }) => {
    return (
        <Container size="responsive" bg="var(--mantine-color-pink-light)">
        <Stack
            h={300}
            bg="var(--mantine-color-body)"
            align="center"
            justify="flex-start"
            gap="sm"
        >
            {todos.map((todo) =>
                <TodoItem key={todo.id} todo={todo} onUpdate={handleCheck} />
            )}
        </Stack>
        </Container>
    );
}

export default TodoList