import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Modal, TextField, Button } from '@material-ui/core';
import { BASE_URL } from '../api/constants';

const useStyles = makeStyles(theme => ({
    paper: {
        display: 'flex',
        flexDirection: 'column',
        position: 'fixed',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 500,
        padding: theme.spacing(2, 4, 3),
        backgroundColor: theme.palette.background.paper,
    },
    item: {
        margin: theme.spacing(2)
    }
}));

const postItem = (payload) => {
    console.log(payload)
    fetch(BASE_URL + '/item', {
        method: 'POST',
        mode: 'cors',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(payload),
    })
    .then((response) => {
        if (response.ok) {
            return response.json()
        }
        return null
    })
    .then(data => {
        console.log("data", data)
    })
    .catch(error => {
        console.log("error", error)
    })
}

function TodoItemModal(props) {
    const classes = useStyles()
    const [itemDetails, updateItemDetails] = useState({ title: props.title, description: props.description })
    return (
        <Modal
            open
            onClose={props.onClose}>
            <div className={classes.paper}>
                <TextField
                    className={classes.item}
                    id='title-field'
                    label='Title'
                    variant='filled'
                    onChange={(event) => updateItemDetails({...itemDetails, title: event.target.value})}
                />
                <TextField
                    className={classes.item}
                    id='description-field'
                    label='Description'
                    variant='filled'
                    onChange={(event) => updateItemDetails({...itemDetails, description: event.target.value})}
                />
                <Button
                    className={classes.item}
                    variant='contained'
                    color='primary'
                    onClick={() => postItem(itemDetails)}>
                    SAVE
                </Button>
            </div>
        </Modal>
    );
}

export default TodoItemModal
