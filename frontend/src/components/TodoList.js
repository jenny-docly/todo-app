
import React from 'react'
import TodoItem from './TodoItem'
import { useEndpoint } from '../api/useEndpoint.js'
import { BASE_URL } from '../api/api.js'
import { Divider, Paper } from '@material-ui/core'

const ITEMS_ENDPOINT = BASE_URL + '/items';

function TodoList() {
    const { data, error, loading } = useEndpoint({ url: ITEMS_ENDPOINT, method: 'GET' })
    return (
        <Paper elevation={3}>
            {data && data.map(
                (item, index) => (
                    <div key={item.id} >
                    <TodoItem id={item.id} title={item.title} description={item.description} />
                        {index<data.length - 1 && <Divider />}
                    </div>
                )
            )}
            { error && <div>Oops, could not load items at this point.</div> }
            { loading && <div>Loading...</div> }
        </Paper >
    )
}

export default TodoList