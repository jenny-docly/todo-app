import React, { useEffect } from "react";

import { useSelector, useDispatch } from "react-redux";

import TodoList from "./components/TodoList";
import MenuBar from "./components/MenuBar";
import TodoItemModal from "./components/TodoItemModal";
import { getItems } from "./api/api.js";
import { setItems } from "./store/todo/actions.js";
import { closeModal } from "./store/ui/actions";

const styles = {
  container: {
    display: "flex",
    flexDirection: "column",
    position: "fixed",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)"
  }
};

function App() {
  const items = useSelector(state => state.todo.items);
  const modalOpen = useSelector(state => state.ui.modalOpen);
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
      <MenuBar />
      <TodoList items={items} />
      <TodoItemModal
        open={modalOpen}
        onClose={() => dispatch(closeModal())}
      ></TodoItemModal>
    </div>
  );
}

export default App;
