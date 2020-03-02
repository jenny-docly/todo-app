import React from 'react'
import { ListItem, ListItemText, ListItemIcon, Checkbox } from '@material-ui/core'
import DeleteIcon from '@material-ui/icons/Delete'
import EditIcon from '@material-ui/icons/Edit'

function TodoItem(props) {
    return (
        <ListItem button>
            <Checkbox></Checkbox>
            <ListItemText primary={props.title} />
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