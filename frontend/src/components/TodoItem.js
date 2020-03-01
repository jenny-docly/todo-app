import React from 'react'

const styles = {
    item: {
        display: 'flex',
        flexDirection: 'column',
        background: 'gray',
        padding: '5px 10px 5px',
    }
}

function TodoItem(props) {
    return (
        <div style={styles.item}>
            <div>{props.title}</div>
            <div>{props.description}</div>
        </div>
    )
}

export default TodoItem