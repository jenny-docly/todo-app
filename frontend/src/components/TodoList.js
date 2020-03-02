
import React from 'react'
import TodoItem from './TodoItem'
import { useEndpoint } from '../api/useEndpoint.js'
import { BASE_URL } from '../api/constants.js'
import { Divider } from '@material-ui/core'

const ITEMS_ENDPOINT = BASE_URL + '/items';

function TodoList() {
    const { data, error, loading } = useEndpoint({ url: ITEMS_ENDPOINT, method: 'GET' })
    return (
        <div>
            {data && data.map(
                (item, index) => (
                    <div key={item.id} >
                    <TodoItem title={item.title} description={item.description} />
                        {index<data.length - 1 && <Divider />}
                    </div>
                )
            )}
{ error && <div>Oops, could not load items at this point.</div> }
{ loading && <div>Loading...</div> }
        </div >
    )
}

export default TodoList