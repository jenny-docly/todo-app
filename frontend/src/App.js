import React, { useEffect } from "react";

import { useSelector, useDispatch } from "react-redux";

import TodoList from "./components/TodoList";
import AddTodo from "./components/AddTodo";
import MenuBar from "./components/MenuBar";
import { getItems } from "./api/api.js";
import { setItems } from "./store/actions.js";

const styles = {
  container: {
    display: "flex",
    flexDirection: "row",
    margin: 50
  },
  listContainer: {
    display: "flex",
    flexDirection: "column"
  },
  addTodo: {
    marginLeft: 200,
    background: "green"
  }
};

function App() {
  const items = useSelector(state => state.items);
  const dispatch = useDispatch();
  useEffect(() => {
    async function fetchItems() {
      try {
        const items = await getItems();
        dispatch(setItems(items));
      } catch (error) {
        console.log(error);
      }
    }
    fetchItems();
  }, []);
  return (
    <div style={styles.container}>
      <div style={styles.listContainer}>
        <MenuBar />
        <TodoList items={items} />
      </div>
      <AddTodo style={styles.addTodo} />
    </div>
  );
}

export default App;
