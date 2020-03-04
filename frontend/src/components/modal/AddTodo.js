import React, { useState } from "react";
import { useDispatch } from "react-redux";

// Material UI
import { makeStyles } from "@material-ui/core/styles";
import { TextField, Button } from "@material-ui/core";

import { addItem } from "../../store/todo/actions.js";
import { postItem } from "../../api/api.js";
import { closeModal } from "../../store/ui/actions.js";

const useStyles = makeStyles(theme => ({
  container: {
    display: "flex",
    flexDirection: "column"
  },
  item: {
    margin: theme.spacing(2)
  },
  button: {
    margin: theme.spacing(2),
    width: "100px"
  }
}));

/**
 * Adds the specified item to the backend and dispatches a Redux action
 * upon success, to also add it to the store.
 *
 * @param {*} item - The item to add.
 * @param {*} dispatch - Redux dispatch function.
 */
const addTodoItem = async (item, dispatch) => {
  try {
    await postItem(item);
    dispatch(addItem(item));
  } catch (error) {
    console.log(error);
    //TODO: show error message
  }
};

function AddTodo() {
  const classes = useStyles();
  const dispatch = useDispatch();
  const [itemDetails, updateItemDetails] = useState();
  return (
    <div className={classes.container}>
      <TextField
        className={classes.item}
        id="title-field"
        label="Add new item"
        variant="filled"
        onChange={event =>
          updateItemDetails({ ...itemDetails, title: event.target.value })
        }
      />
      <TextField
        className={classes.item}
        id="description-field"
        label="Description"
        multiline
        rowsMax="4"
        variant="filled"
        onChange={event =>
          updateItemDetails({
            ...itemDetails,
            description: event.target.value
          })
        }
      />
      <Button
        className={classes.button}
        variant="contained"
        color="primary"
        onClick={() => {
          addTodoItem(itemDetails, dispatch);
          dispatch(closeModal())
        }}
      >
        ADD
      </Button>
    </div>
  );
}

export default AddTodo;
