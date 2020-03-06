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

import { itemsModified } from "../store/todo/actions.js";
import { openModal } from "../store/ui/actions.js";
import { deleteItem, updateItem } from "../api/api.js";

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
    dispatch(itemsModified());
  } catch (error) {
    console.log(error);
    //TODO: show error message
  }
};

const updateTodoItem = async (id, item, dispatch) => {
  try {
    await updateItem(id, item);
    dispatch(itemsModified());
  } catch (error) {
    console.log(error);
    //TODO: show error message
  }
};

function TodoItem(props) {
  const classes = useStyles();
  const dispatch = useDispatch();
  const { id, title, completed } = props.item;
  return (
    <ListItem onClick={() => dispatch(openModal("view", props.item))} button>
      <ListItemIcon>
        <Checkbox
          checked={completed}
          onClick={event => {
            updateTodoItem(
              id,
              { ...props.item, completed: event.target.checked },
              dispatch
            );
            event.stopPropagation();
          }}
        ></Checkbox>
      </ListItemIcon>
      <ListItemText primary={title} className={classes.title} />
      <ListItemIcon>
        <EditIcon
          onClick={event => {
            dispatch(openModal("edit", props.item));
            event.stopPropagation();
          }}
        />
      </ListItemIcon>
      <ListItemIcon>
        <DeleteIcon
          onClick={event => {
            deleteTodoItem(id, dispatch);
            event.stopPropagation();
          }}
        />
      </ListItemIcon>
    </ListItem>
  );
}

export default TodoItem;
