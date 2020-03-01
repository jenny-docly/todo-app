const express = require('express')
const HttpStatus = require('http-status-codes');

const { createItem, getItems } = require('./model/item.js')

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
            res.status(HttpStatus.CREATED).json({ id })
        } catch (error) {
            console.log(error)
            res.status(HttpStatus.INTERNAL_SERVER_ERROR).json({ errorMessage: `Something went wrong when creating item: ${title}` })
        }
    } else {
        res.status(HttpStatus.BAD_REQUEST).json({ errorMessage: "Wrong usage, title is missing in body." })
    }
})

app.get(baseUrl + '/items', async (req, res) => {
    try {
        const items = await getItems()
        res.status(HttpStatus.OK).json(items)
    } catch (error) {
        console.log(error)
        res.status(HttpStatus.INTERNAL_SERVER_ERROR).json({ errorMessage: 'Something went wrong when retrieving items' })
    }
})

app.listen(port, () => console.log(`Server is ready. Listening on port ${port}!`))