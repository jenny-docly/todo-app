import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";

import { CircularProgress, Typography } from "@material-ui/core";

import TodoList from "./components/TodoList";
import MenuBar from "./components/MenuBar";
import Modal from "./components/modal/Modal";
import { getItems } from "./api/api.js";
import { setItems, setItemCount } from "./store/todo/actions.js";
import { closeModal } from "./store/ui/actions";

const styles = {
  container: {
    display: "flex",
    flexDirection: "column",
    margin: "auto",
    width: "50%",
    marginTop: "100px"
  },
  item: {
    marginTop: "100px",
    alignSelf: "center"
  }
};

function TodoApp() {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const { itemCount, items, stale, paging, searchString } = useSelector(
    state => state.todo
  );
  const { modal } = useSelector(state => state.ui);
  const dispatch = useDispatch();
  useEffect(() => {
    async function fetchItems() {
      try {
        setLoading(true);
        const response = await getItems(
          searchString,
          paging.pageSize,
          paging.offset
        );
        setLoading(false);
        dispatch(setItems(response.items));
        dispatch(setItemCount(response.itemCount));
      } catch (error) {
        setError(true);
        setLoading(false);
      }
    }
    fetchItems();
    // eslint-disable-next-line
  }, [searchString, stale, paging]);

  return (
    <div style={styles.container}>
      <MenuBar />
      {!loading && !error && (
        <TodoList
          items={items}
          itemCount={itemCount}
          pageSize={paging.pageSize}
        />
      )}
      {loading && <CircularProgress style={styles.item} />}
      {!loading && error && (
        <Typography style={styles.item} variant="body1">
          Oops, could load todos at this point.
        </Typography>
      )}
      <Modal
        mode={modal.mode}
        item={modal.item}
        open={modal.open}
        onClose={() => dispatch(closeModal())}
      ></Modal>
    </div>
  );
}

export default TodoApp;
