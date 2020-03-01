const { Client } = require('pg')

const client = new Client({
    host: 'localhost',
    port: 5432,
    database: 'todo_db',
    user: 'postgres',
    password: 'postgres',
})

client.connect(error => {
    if (error) {
        console.error('Failed to connect to database:', error.stack)
    } else {
        console.log('Successfully connected to database!')
    }
})

module.exports = {
    client
}