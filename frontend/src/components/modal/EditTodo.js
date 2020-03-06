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

const updateTodoItem = async (id, item, dispatch) => {
  try {
    await updateItem(id, item);
    dispatch(itemsModified());
  } catch (error) {
    console.log(error);
    //TODO: show error message
  }
};

function EditTodo(props) {
  const classes = useStyles();
  const dispatch = useDispatch();
  const [itemDetails, updateItemDetails] = useState(props.item);
  return (
    <div className={classes.container}>
      <TextField
        className={classes.item}
        id="title-field"
        defaultValue={props.item.title}
        variant="filled"
        onChange={event =>
          updateItemDetails({
            ...itemDetails,
            title: event.target.value
          })
        }
      />
      <TextField
        className={classes.item}
        id="description-field"
        defaultValue={props.item.description}
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
          updateTodoItem(props.item.id, itemDetails, dispatch);
          dispatch(closeModal());
        }}
      >
        SAVE
      </Button>
    </div>
  );
}

EditTodo.propTypes = {
  item: PropTypes.object
}

export default EditTodo;
