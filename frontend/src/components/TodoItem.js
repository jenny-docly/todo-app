import React from "react";

import { useDispatch } from "react-redux";

import { makeStyles } from "@material-ui/core/styles";
import {
  ListItem,
  ListItemText,
  ListItemIcon,
  Checkbox
} from "@material-ui/core";
import DeleteIcon from "@material-ui/icons/Delete";
import EditIcon from "@material-ui/icons/Edit";

import { deleteItem as deleteItemAction } from "../store/actions.js";
import { deleteItem } from "../api/api.js";

const useStyles = makeStyles(() => ({
  title: {
    paddingRight: 100
  }
}));

/**
 * Deletes the item with the specified id from the backend and
 * dispatches a Redux action upon success, to remove it from the
 * store.
 *
 * @param {*} id - The id of the item to remove.
 * @param {*} dispatch - Redux dispatch function.
 */
const deleteTodoItem = async (id, dispatch) => {
  try {
    await deleteItem(id);
    dispatch(deleteItemAction(id));
  } catch (error) {
    console.log(error);
    //TODO: show error message
  }
};

function TodoItem(props) {
  const classes = useStyles();
  const dispatch = useDispatch();
  return (
    <ListItem button>
      <Checkbox></Checkbox>
      <ListItemText primary={props.title} className={classes.title} />
      <ListItemIcon>
        <EditIcon />
      </ListItemIcon>
      <ListItemIcon>
        <DeleteIcon onClick={() => deleteTodoItem(props.id, dispatch)} />
      </ListItemIcon>
    </ListItem>
  );
}

export default TodoItem;
