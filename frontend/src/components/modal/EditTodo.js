import React, { useState } from "react";
import { useDispatch } from "react-redux";
import PropTypes from "prop-types";

// Material UI
import { makeStyles } from "@material-ui/core/styles";
import { TextField, Button } from "@material-ui/core";

import { itemsModified } from "../../store/todo/actions.js";
import { updateItem } from "../../api/api.js";
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

const validateInput = item => {
  return item && item.title && item.title !== "";
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

function EditTodo({ item }) {
  const classes = useStyles();
  const dispatch = useDispatch();
  const [error, setError] = useState(false);
  const [editedItem, editItem] = useState(item);
  return (
    <div className={classes.container}>
      <TextField
        className={classes.item}
        id="title-field"
        defaultValue={item.title}
        variant="filled"
        onChange={event => {
          setError(false);
          editItem({
            ...editedItem,
            title: event.target.value
          });
        }}
        helperText={error ? "Title can not be empty" : ""}
      />
      <TextField
        className={classes.item}
        id="description-field"
        defaultValue={item.description}
        multiline
        rowsMax="4"
        variant="filled"
        onChange={event =>
          editItem({
            ...editedItem,
            description: event.target.value
          })
        }
      />
      <Button
        className={classes.button}
        variant="contained"
        color="primary"
        onClick={() => {
          validateInput(editedItem)
            ? updateTodoItem(item.id, editedItem, dispatch) &&
              dispatch(closeModal())
            : setError(true);
        }}
      >
        SAVE
      </Button>
    </div>
  );
}

EditTodo.propTypes = {
  item: PropTypes.object
};

export default EditTodo;
