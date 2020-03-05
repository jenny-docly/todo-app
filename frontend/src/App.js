import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import { Pagination } from '@material-ui/lab';

import TodoList from "./components/TodoList";
import MenuBar from "./components/MenuBar";
import Modal from "./components/modal/Modal";
import { getItems } from "./api/api.js";
import { setItems } from "./store/todo/actions.js";
import { closeModal } from "./store/ui/actions";

const styles = {
  container: {
    margin: 'auto',
    width: '50%',
    marginTop: '100px',
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
      <Pagination
        count={3}
        page={1}
        onChange={(event, value) => console.log("value: ", value)}
      />
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
