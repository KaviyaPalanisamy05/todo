const mongoose = require('mongoose');

//creation of todo collection in MongoDB - CRUD operation
const todoSchema = new mongoose.Schema({
    title :String,
    description :String,
},{
    timestamps:true
});
const todoModel = mongoose.model(`todo`, todoSchema);

//creation of todo collection in MongoDB - User authentication
const authSchema = new mongoose.Schema({
    username :String,
    password :String,
},{
    timestamps:true
});
const authModel = mongoose.model(`auth`, authSchema);

//create function
async function createTODO(title, description){
    const todo = await todoModel.create({
        title,
        description
    });
    return todo;
}

//delete function
async function deleteTODO(_id) {
    const deleteResp = await todoModel.deleteOne({_id});
    return deleteResp;
}

//update function
async function updateTODO(_id, title,description){
    const updated =await todoModel.updateOne({
        _id,
    },{
        title,
        description
    
    });
    return updated;
}

//pagination function
async function pageTODO(page, limit) {
    const skip =(page -1)*limit;
    const todo = await todoModel.find().skip(Number(skip)).limit(Number(limit));
    return todo;
}

//signup function (account creation)
async function signup(username, password){
    const auth = await authModel.create({
        username,
        password
    });
    return auth;
}

//login function
async function loginID(username,password){
    const login = await authModel.find({username,password});
    return login;
}

//function call
module.exports = {
    createTODO,
    deleteTODO,
    updateTODO,
    pageTODO,
    signup,
    loginID
}



