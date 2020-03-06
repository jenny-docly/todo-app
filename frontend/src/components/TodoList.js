import React from "react";
import PropTypes from "prop-types";

import { Divider, Paper } from "@material-ui/core";
import { useDispatch } from "react-redux";
import { Pagination } from "@material-ui/lab";

import { updatePageOffset } from "../store/todo/actions";
import TodoItem from "./TodoItem";

const styles = {
  container: {
    display: "flex",
    flexDirection: "column"
  },
  pagination: {
    marginTop: "15px",
    alignSelf: "center"
  }
};

function TodoList({ items, itemCount, pageSize }) {
  const dispatch = useDispatch();
  return (
    <div style={styles.container}>
      <Paper elevation={3}>
        {items &&
          items.map((item, index) => (
            <div key={item.id}>
              <TodoItem item={item} />
              {index < items.length - 1 && <Divider />}
            </div>
          ))}
      </Paper>
      {items && items.length > 0 && (
        <Pagination
          style={styles.pagination}
          count={Math.ceil(itemCount / pageSize)}
          onChange={(event, value) => {
            dispatch(updatePageOffset(pageSize * value - pageSize));
          }}
        />
      )}
    </div>
  );
}

TodoList.propTypes = {
  items: PropTypes.array,
  itemCount: PropTypes.number,
  pageSize: PropTypes.number
};

export default TodoList;
