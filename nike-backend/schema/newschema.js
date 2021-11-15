/*
importing the mongoose to storing the data 
*/
/**
 * @description:importing the mongoose to store the data in database using schema
 */

const mongoose = require('mongoose') 
const newschema=new mongoose.Schema({
// all requred schema data
    email:{
        type :String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    newpassword:{
        type:String,
        required:true
    },
    firstname:{
        type:String,
        required:true
    },
    lastname:{
        type:String,
        required:true
    }
})
//exporting the mongoose module
module.exports= mongoose.model('newschema',newschema)
