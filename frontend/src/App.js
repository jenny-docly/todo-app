import React from 'react'
import TodoList from './components/TodoList'

const styles = {
  centered: {
    position: 'fixed',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)'
  }
}

function App() {
  return (
    <div style={styles.centered}>
      <TodoList items={[{
        title: 'set up http client',
        description: 'so that todo items can be fetched from server'
      }]}
      />
    </div>
  )
}

export default App
