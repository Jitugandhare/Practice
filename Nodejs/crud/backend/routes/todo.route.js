const Todo = require('../model/todo.model.js');
const express = require('express')

const todoRoute = express.Router();


todoRoute.get("/", async (req, res) => {
    try {
        const todo = await Todo.find();
        if (todo.length === 0) return res.status(404).json({ msg: "Todo not found." })
        res.status(200).json({ msg: "Todo fetched successfully", todo })
    } catch (error) {
        res.status(500).json({ msg: "server error", error: error.message })
    }
})

todoRoute.post("/create", async (req, res) => {

    try {
        const todo = new Todo(req.body);
        await todo.save();
        res.status(201).json({ msg: "todo created successfully", todo })


    } catch (error) {
        res.status(500).json({ msg: "server error", error: error.message })
    }
})


todoRoute.put("/:id", async (req, res) => {
    try {
        const { id } = req.params;
        const todo = await Todo.findByIdAndUpdate(id, req.body, { new: true })
        if (!todo) return res.status(404).json({ msg: "todo not found" });
        res.status(200).json({ msg: "todo updated successfully..." ,todo})


    } catch (error) {
        res.status(500).json({ msg: "server error", error: error.message })
    }
})


todoRoute.delete("/:id", async (req, res) => {
    try {
        const { id } = req.params;
        const todo = await Todo.findByIdAndDelete(id);

        if (!todo) return res.status(404).json({ msg: "todo not found" });

        res.status(200).json({ msg: "todo deleted successfully", todo })



    } catch (error) {
        res.status(500).json({ msg: "server error", error: error.message })
    }
})


module.exports = todoRoute;