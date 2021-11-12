<<<<<<< HEAD
/*
importing the mongoose to storing the data 
*/
=======
/**
 * @description:importing the mongoose to store the data in database using schema

 */
>>>>>>> cb58d99dde6a1a927e8822d144359408f41db179
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

<<<<<<< HEAD
//exporting the mongoose module
module.exports= mongoose.model('newschema',newschema)
=======
module.exports= mongoose.model('newschema',newschema)  // exporting the schema for production use
>>>>>>> cb58d99dde6a1a927e8822d144359408f41db179
