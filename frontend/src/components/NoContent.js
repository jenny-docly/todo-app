import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Paper, Button, Typography } from "@material-ui/core";

import { openModal } from "../store/ui/actions.js";

const styles = {
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    height: "300px"
  },
  item: {
    marginTop: "100px"
  }
};

function NoContent() {
  const dispatch = useDispatch();
  const searchString = useSelector(state => state.todo.searchString);
  return (
    <Paper style={styles.container} elevation={3}>
      {searchString === "" && (
        <Button
          style={styles.item}
          variant="contained"
          color="primary"
          onClick={() => dispatch(openModal("add", null))}
        >
          ADD TODO
        </Button>
      )}
      {searchString.length > 0 && (
        <Typography variant="body1" style={styles.item}>No todos found!</Typography>
      )}
    </Paper>
  );
}

export default NoContent;
