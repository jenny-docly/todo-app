import React from "react";
import TodoItem from "./TodoItem";
import { Divider, Paper } from "@material-ui/core";

function TodoList(props) {
  return (
    <Paper elevation={3}>
      {props &&
        props.items &&
        props.items.map((item, index) => (
          <div key={item.id}>
            <TodoItem
              id={item.id}
              title={item.title}
              description={item.description}
            />
            {index < props.items.length - 1 && <Divider />}
          </div>
        ))}
    </Paper>
  );
}

export default TodoList;
