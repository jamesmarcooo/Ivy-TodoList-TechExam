const express = require('express')
const path = require('path')
const app = express()
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const Todo = require('./model/model')
const cors = require("cors");

mongoose.connect('mongodb://localhost/todo-app')

app.use('http://localhost:8080/', express.static(path.resolve(__dirname, 'assets')))

app.use(express.json());
app.use(cors());
app.use(bodyParser.json())

app.post('/api/delete', async (req, res) => {
    try{
        const { id } = req.body
        console.log(id, '/api/delete')

        const response = await Todo.deleteOne({ id })

        console.log(response, '/api/delete response')

        res.json({ status: 'ok' })
    } catch (err) {
        console.log(err)
    }
})

app.post('/api/modify', async (req, res) => {
    try{
        const { old: id, new: newValue } = req.body

        console.log("updateeeee",{ old: id, new: newValue })
        const response = await Todo.updateOne(
            {
                id: id
            },
            {
                $set: {
                    value: newValue
                }
            }
        )

        console.log(response)

        res.json({ status: 'ok' })
    } catch (err) {
        console.log(err)
}
})

app.get('/api/get', async (req, res) => {
    try{
        const id = await Todo.find({})
        res.json(id)
    } catch (err) {
        console.log(err)
    }
})

app.post('/api/create', async (req, res) => {
    try{
        const id = req.body
        console.log("create body",id)

        // CREATE
        const response = await Todo.create(id)

        console.log(response)

        res.json({ status: 'ok' })
    } catch (err) {
        console.log(err)
    }
})

const port = process.env.PORT || 8080;
app.listen(port, () => console.log(`Listening on port ${port}...`));