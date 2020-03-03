import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { TextField, Button } from "@material-ui/core";
import { postItem } from "../api/api.js";

const useStyles = makeStyles(theme => ({
  container: {
    display: "flex",
    flexDirection: "column",
  },
  item: {
    margin: theme.spacing(2),
  },
  button: {
    margin: theme.spacing(2),
    width: "100px"
  }
}));

function AddTodo(props) {
  const classes = useStyles();
  const [itemDetails, updateItemDetails] = useState({
    title: props.title,
    description: props.description
  });
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
        onClick={() => postItem(itemDetails)}
      >
        ADD
      </Button>
    </div>
  );
}

export default AddTodo;
