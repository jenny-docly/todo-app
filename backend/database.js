const { Client } = require('pg')

function connectToDatabase() {
    const client = new Client({
        host: 'localhost',
        port: 5432,
        database: 'todo_db',
        user: 'postgres',
        password: 'postgres',
    })

    client.connect(err => {
        if (err) {
            console.error('Failed to connect to database:', err.stack)
        } else {
            console.log('Successfully connected to database!')
        }
    })
    return client
}

module.exports = {
    connectToDatabase
}