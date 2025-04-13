const express=require('express');
const { createTODO } = require('../models/todo');
const router= express.Router();

router.post('/',async(req, res)=>{
    const {title,description} = req.body;
    // console.log({body: req.body});  //after JSON edit in Thunder
    const todo =await createTODO(title,description);
    res.send({messgae : 'not implemented'});
});

module.exports=router;

