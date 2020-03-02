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
      <TodoList/>
    </div>
  )
}

export default App
