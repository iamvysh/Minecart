
const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  username: String,
  email:{
    type:String,
    required:true
  },
  password: String,
  cart:[{
    type:mongoose.Types.ObjectId,
    ref:"products"
  }]
  
  

  

},{timestamps:true});

const user = mongoose.model("user", userSchema);

module.exports = user;


