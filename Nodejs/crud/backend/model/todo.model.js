const mongoose = require('mongoose')


const todoSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    status: {
        type: String,
        enum:['pending','in-progress','completed'],
        default: 'pending'
    }
})

const Todo=mongoose.model("Todo",todoSchema);


module.exports=Todo;