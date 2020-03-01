
import React from 'react'
import TodoItem from './TodoItem'

function TodoList(props) {
    return props.items.map(
        item => <TodoItem title={item.title} description={item.description} />
    )
}

export default TodoList