import React from 'react'
import { Checkbox, Container, Text } from '@mantine/core';

const TodoItem = ({ todo, onUpdate }) => {
    return (
        <Container size="responsive">
            <Checkbox
                id={todo.id}
                size="xl"
                label={todo.body}
                checked={todo.checked}
                color="yellow"
                onChange={() => onUpdate(todo)}
            />
        </Container>
    )
}

export default TodoItem