import React from 'react'

const TodoItem = ({todo, onUpdate}) => {
    return (
        <div>
            <input type="checkbox" id={todo.id} checked={todo.checked} onChange={() => onUpdate(todo)}></input>
            <label htmlFor={todo.id}>{todo.body}</label>
            <label></label>
        </div>
    )
}

export default TodoItem
