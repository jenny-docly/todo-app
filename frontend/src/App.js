import React, { useEffect } from "react";

import { useSelector, useDispatch } from "react-redux";

import TodoList from "./components/TodoList";
import MenuBar from "./components/MenuBar";
import Modal from "./components/modal/Modal";
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
  const { modal, todolist } = useSelector(state => state.ui);
  const dispatch = useDispatch();
  useEffect(() => {
    async function fetchItems() {
      try {
        const items = await getItems(todolist.searchString);
        dispatch(setItems(items));
      } catch (error) {
        console.log(error);
      }
    }
    fetchItems();
  }, [todolist]);
  return (
    <div style={styles.container}>
      <MenuBar />
      <TodoList items={items} />
      <Modal
        mode={modal.mode}
        item={modal.item}
        open={modal.open}
        onClose={() => dispatch(closeModal())}
      ></Modal>
    </div>
  );
}

export default App;
