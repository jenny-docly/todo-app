import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Modal, TextField, Button } from '@material-ui/core';

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
                    onChange={(event, newValue) => console.log("new value", newValue)}
                />
                <TextField
                    className={classes.item}
                    id='description-field'
                    label='Description'
                    variant='filled'
                    onChange={(event, newValue) => console.log("new value", newValue)}
                />
                <Button
                    className={classes.item}
                    variant='contained'
                    color='primary'
                    onClick={() => console.log("post item to server")}>
                    SAVE
                </Button>
            </div>
        </Modal>
    );
}

export default TodoItemModal
