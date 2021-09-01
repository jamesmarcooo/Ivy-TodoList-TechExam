const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const taskSchema = new Schema({
    id: { type: Number, required: true, unique: true },
    value: { type: String, required: true }

});

module.exports = mongoose.model("task", taskSchema);