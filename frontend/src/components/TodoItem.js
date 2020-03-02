import React from 'react'

import { makeStyles } from '@material-ui/core/styles'
import { ListItem, ListItemText, ListItemIcon, Checkbox } from '@material-ui/core'
import DeleteIcon from '@material-ui/icons/Delete'
import EditIcon from '@material-ui/icons/Edit'

const useStyles = makeStyles(() => ({
    title: {
      paddingRight: 100,
    },
  }));

function TodoItem(props) {
    const classes = useStyles();
    return (
        <ListItem button>
            <Checkbox></Checkbox>
            <ListItemText primary={props.title} className={classes.title}/>
            <ListItemIcon>
                <EditIcon />
            </ListItemIcon>
            <ListItemIcon>
                <DeleteIcon />
            </ListItemIcon>
        </ListItem>
    )
}

export default TodoItem