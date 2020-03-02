import React, { useState } from 'react'
import { Button } from '@material-ui/core'

import TodoList from './components/TodoList'
import TodoItemModal from './components/TodoItemModal'

const styles = {
  centered: {
    position: 'fixed',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)'
  }
}

function App() {
  const [showModal, setShowModal] = useState(false)
  return (
    <div style={styles.centered}>
      <Button variant="contained" onClick={() => setShowModal(true)}>NEW TODO</Button>
      <TodoList/>
      {showModal && <TodoItemModal onClose={() => setShowModal(false)}></TodoItemModal>}
    </div>
  )
}

export default App
