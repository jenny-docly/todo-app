const express = require('express')
const { Client } = require('pg')

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

const app = express()
const port = 8080;

app.get('/', (req, res) => res.send('Nothing here yet.'))

app.listen(port, () => console.log(`Server is ready. Listening on port ${port}!`))