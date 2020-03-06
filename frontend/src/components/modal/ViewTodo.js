import React from "react";
import PropTypes from "prop-types";

// Material UI
import { makeStyles } from "@material-ui/core/styles";
import { Typography } from "@material-ui/core";

const useStyles = makeStyles(theme => ({
  container: {
    display: "flex",
    flexDirection: "column",
  },
  item: {
    margin: theme.spacing(2)
  }
}));

function ViewTodo(props) {
  const classes = useStyles();
  return (
    <div className={classes.container}>
      <Typography className={classes.item} variant="h5">
        {props.item.title}
      </Typography>
      <Typography className={classes.item} variant="body2">
        {props.item.description ? props.item.description : "No description"}
      </Typography>
    </div>
  );
}

ViewTodo.propTypes = {
  item: PropTypes.object
};

export default ViewTodo;
