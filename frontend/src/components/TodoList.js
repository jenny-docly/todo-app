
import React from 'react'
import TodoItem from './TodoItem'
import { useEndpoint } from '../api/useEndpoint.js'
import { BASE_URL } from '../api/constants.js'

const ITEMS_ENDPOINT = BASE_URL + '/items';

function TodoList() {
    const { data, error, loading } = useEndpoint({ url: ITEMS_ENDPOINT, method: 'GET' })
    return (
        <div>
            {data && data.map(
                item => <TodoItem key={item.id} title={item.title} description={item.description} />
            )}
            {error && <div>Oops, could not load items at this point.</div>}
            {loading && <div>Loading...</div>}
        </div>
    )
}

export default TodoList