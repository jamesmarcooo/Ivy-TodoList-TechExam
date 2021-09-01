const mongoose = require('mongoose')

const TodoSchema = new mongoose.Schema({
    id: { type: Number, required: true, default:() => {
        return Math.floor(Math.random() * 10000)
    } },
	value: { type: String, required: true }

})

const model = mongoose.model('todomodel', TodoSchema)

module.exports = model