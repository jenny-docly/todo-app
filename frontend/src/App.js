import React from "react";

import TodoList from "./components/TodoList";
import AddTodo from "./components/AddTodo";
import MenuBar from "./components/MenuBar";

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'row',
    margin: 50,
  },
  listContainer: {
    display: 'flex',
    flexDirection: 'column',
  },
  addTodo: {
    marginLeft: 200,
    background: 'green'
  }
};

function App() {
  return (
    <div style={styles.container}>
      <div style={styles.listContainer}>
      <MenuBar />
      <TodoList />
      </div>
      <AddTodo style={styles.addTodo} />
    </div>
  );
}

export default App;
