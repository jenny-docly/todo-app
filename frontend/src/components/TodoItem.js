import React from 'react'

import { makeStyles } from '@material-ui/core/styles'
import { ListItem, ListItemText, ListItemIcon, Checkbox } from '@material-ui/core'
import DeleteIcon from '@material-ui/icons/Delete'
import EditIcon from '@material-ui/icons/Edit'

import { BASE_URL } from '../api/constants.js'

const useStyles = makeStyles(() => ({
    title: {
        paddingRight: 100,
    }
}))

const deleteItem = (id) => {
    fetch(BASE_URL + '/item/' + id, {
        method: 'DELETE',
    })
    .catch(error => {
        console.log("error", error)
        //TODO: show error message
    })
}

function TodoItem(props) {
    const classes = useStyles();
    return (
        <ListItem button>
            <Checkbox></Checkbox>
            <ListItemText primary={props.title} className={classes.title} />
            <ListItemIcon>
                <EditIcon />
            </ListItemIcon>
            <ListItemIcon>
                <DeleteIcon onClick={() => deleteItem(props.id)}/>
            </ListItemIcon>
        </ListItem>
    )
}

export default TodoItem