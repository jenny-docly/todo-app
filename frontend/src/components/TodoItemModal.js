import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Modal } from "@material-ui/core";
import AddTodo from "./AddTodo";

const useStyles = makeStyles(theme => ({
  paper: {
    display: "flex",
    flexDirection: "column",
    position: "fixed",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 500,
    padding: theme.spacing(2, 4, 3),
    backgroundColor: theme.palette.background.paper
  },
  item: {
    margin: theme.spacing(2)
  }
}));

function TodoItemModal(props) {
  const classes = useStyles();
  return (
    <Modal open={props.open} onClose={props.onClose}>
      <div className={classes.paper}>
        <AddTodo></AddTodo>
      </div>
    </Modal>
  );
}

export default TodoItemModal;
