import React from "react";
import PropTypes from "prop-types";

// Material UI
import { Modal as MuiModal } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

// Components
import AddTodo from "./AddTodo";
import EditTodo from "./EditTodo";

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

function Modal(props) {
  const classes = useStyles();
  return (
    <MuiModal open={props.open} onClose={props.onClose}>
      <div className={classes.paper}>
        {props.mode === "add" && <AddTodo />}
        {props.mode === "edit" && <EditTodo item={props.item}></EditTodo>}
      </div>
    </MuiModal>
  );
}

Modal.propTypes = {
  open: PropTypes.bool,
  mode: PropTypes.oneOf(['add', 'edit', 'view']),
  item: PropTypes.object
}

export default Modal;
