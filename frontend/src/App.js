import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import TodoList from "./components/TodoList";
import MenuBar from "./components/MenuBar";
import Modal from "./components/modal/Modal";
import { getItems } from "./api/api.js";
import { setItems, setItemCount } from "./store/todo/actions.js";
import { closeModal } from "./store/ui/actions";

const styles = {
  container: {
    margin: "auto",
    width: "50%",
    marginTop: "100px"
  }
};

function App() {
  const { itemCount, items, stale, paging, searchString } = useSelector(state => state.todo);
  const { modal } = useSelector(state => state.ui);
  const dispatch = useDispatch();
  useEffect(() => {
    async function fetchItems() {
      try {
        const response = await getItems(
          searchString,
          paging.pageSize,
          paging.offset
        );
        dispatch(setItems(response.items));
        dispatch(setItemCount(response.itemCount));
      } catch (error) {
        console.log(error);
      }
    }
    fetchItems();
    // eslint-disable-next-line
  }, [searchString, stale, paging]);

  return (
    <div style={styles.container}>
      <MenuBar />
      <TodoList
        items={items}
        itemCount={itemCount}
        pageSize={paging.pageSize}
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
