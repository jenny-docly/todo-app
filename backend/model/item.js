const { client } = require('../database.js')

const createItem = (title, description) => {
    return new Promise((resolve, reject) => {
        client
            .query('INSERT INTO todo.items(title, description) VALUES($1, $2) RETURNING id',
                [title, description])
            .then((result) => resolve(result.rows[0].id))
            .catch((error) => reject(error))
    })
}

module.exports = {
    createItem
}