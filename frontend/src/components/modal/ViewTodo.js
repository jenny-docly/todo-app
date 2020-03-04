import React from "react";
import PropTypes from "prop-types";

// Material UI
import { makeStyles } from "@material-ui/core/styles";
import { Typography } from "@material-ui/core";

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

function ViewTodo(props) {
  const classes = useStyles();
  return (
    <div className={classes.container}>
      <Typography variant="h5">{props.item.title}</Typography>
      <Typography variant="h7">{props.item.description}</Typography>
    </div>
  );
}

ViewTodo.propTypes = {
  item: PropTypes.object
};

export default ViewTodo;
