const express = require('express');
const Todo = require('../models/todo');
const router = express.Router();

router.post('/create-todo', (req, res) => {
    
    const todo = new Todo({todo: req.body.todo, checked: false});

    todo.save()
    .then(document => {

        res.status(201).json({
            message: 'Successfully posted the todo!',
            todo: document
        })
    })
    .catch(err => {

        console.log('Error: ', err.message);
    })
})

router.get('/get-todos', (req, res) => {

    Todo.find()
    .then( documents => {

            res.status(200).json({
                message: 'successfullt fetched todos!',
                todos: documents
            })
        }
    )
    .catch(err => {

        console.log('Error', err.message);
    })
})

router.put('/todo-check', (req, res) => {

    console.log('checked: ', req.body.checked)
    Todo.updateOne({_id: req.query.id}, {checked: req.body.checked, _id: req.body.todoItem.id})
    .then(document => {

        console.log('todo: ', document)
        
        res.status(200).json({
            message: 'Successfully edited the todo!',
            todo: document
        });
    })
    .catch(err => {

        console.log('Error: ', err.message);
    })


})

router.delete('/todo-delete', (req , res) => {


})


module.exports = router;