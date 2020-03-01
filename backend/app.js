const express = require('express')

const { createItem } = require('./model/item.js')

const app = express()
app.use(express.json())

const port = 8080;

const baseUrl = '/api/v1/todo'

app.post(baseUrl + '/item', async (req, res) => {
    const title = req.body.title
    const description = req.body.description
    if (title) {
        try {
            const id = await createItem(title, description)
            res.status(201).json({id})
        } catch (error) {
            res.status(500).json({errorMessage: `Something went wrong when creating item: ${title}`})
        }
    } else {
        res.status(400).json({errorMessage: "Wrong usage, title is missing in body."})
    }
})

app.get('/', (req, res) => res.send('Nothing here yet.'))

app.listen(port, () => console.log(`Server is ready. Listening on port ${port}!`))