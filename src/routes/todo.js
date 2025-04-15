const express=require('express');
//crud operation
const { createTODO } = require('../models/todo');
const { deleteTODO } = require('../models/todo');
const { updateTODO } = require('../models/todo');
const { pageTODO } = require('../models/todo');
//user authentication
const { signup } = require('../models/todo');
const { loginID } = require('../models/todo');

const router= express.Router();
module.exports=router;

//create or insert into todolist
router.post('/',async(req, res)=>{
    const {title,description} = req.body;
    // console.log({body: req.body});  //after JSON edit in Thunder
    const todo =await createTODO(title,description);
    res.send(todo);
});

//delete todo list
router.delete('/:id', async (req, res) => {
    const _id = req.params.id; //destructuring the params
    const resp = await deleteTODO(_id); //deleteTodo function is called from models/todo.js
    res.send(resp); //send the response back to the client
    
});

//update todo list
router.put('/:id', async (req, res) => {
    const _id = req.params.id; //destructuring the params
    const {title, description} = req.body; //destructuring the body
    const resp = await updateTODO(_id, title, description); //updateTodo function is called from models/todo.js
    res.send(resp); //send the response back to the client
    
});

//pagination
router.get('/page', async (req, res) => {
    const { page, limit} = req.body;
    const todo = await pageTODO(page, limit);
    res.send(todo);
});

//user authentication 
router.post('/signup',async(req, res)=>{
    const {username,password} = req.body;
    // console.log({body: req.body});  //after JSON edit in Thunder
    const todo =await signup(username,password);
    res.send(todo);
});
router.post('/login',async(req, res)=>{
    const {username,password} = req.body;
    // console.log({body: req.body});  //after JSON edit in Thunder
    const login =await loginID(username,password);
    if (login.length<=0){
        res.json("invalid credentials");
    }
    else{
        res.json("Good!!")
    }
});
