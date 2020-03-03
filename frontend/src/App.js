import React, { useState } from "react";

import TodoList from "./components/TodoList";
import AddTodo from "./components/AddTodo";

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'row',
    margin: 50,
  },
  addTodo: {
    marginLeft: 200,
    background: 'green'
  }
};

function App() {
  return (
    <div style={styles.container}>
      <TodoList />
      <AddTodo style={styles.addTodo} />
    </div>
  );
}

export default App;
