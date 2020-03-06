import React from "react";
import PropTypes from "prop-types";

// Material UI
import { Modal as MuiModal } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

// Components
import AddTodo from "./AddTodo";
import EditTodo from "./EditTodo";
import ViewTodo from "./ViewTodo";

const useStyles = makeStyles(theme => ({
  paper: {
    display: "flex",
    flexDirection: "column",
    position: "fixed",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    padding: theme.spacing(2, 4, 3),
    backgroundColor: theme.palette.background.paper
  },
  item: {
    margin: theme.spacing(2)
  }
}));

function Modal({ mode, open, item, onClose }) {
  const classes = useStyles();
  return (
    <MuiModal open={open} onClose={onClose}>
      <div className={classes.paper}>
        {mode === "add" && <AddTodo />}
        {mode === "edit" && <EditTodo item={item}></EditTodo>}
        {mode === "view" && <ViewTodo item={item}></ViewTodo>}
      </div>
    </MuiModal>
  );
}

Modal.propTypes = {
  open: PropTypes.bool,
  mode: PropTypes.oneOf(["add", "edit", "view"]),
  item: PropTypes.object
};

export default Modal;
