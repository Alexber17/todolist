const mongoose= require('mongoose');
const Schema = mongoose.Schema;


//creat Schema
const listSchame = new Schema({
    name:{type: String, required: true},

},{timestamps: true});

//Create Model from our Schema

const List= mongoose.model('List',listSchame);
//Export List Model
module.exports= List;
