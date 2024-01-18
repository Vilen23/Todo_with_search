const mongoose = require('mongoose');
mongoose.connect("mongodb+srv://Shivam:itsbeens0long@cluster0.ezyirm3.mongodb.net/todos");

const TodoSchema = mongoose.Schema({
    title:String,
    interest:String
})

const todos = mongoose.model('todos',TodoSchema)

module.exports = {
    todos
}