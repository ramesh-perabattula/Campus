const mongoose=require("mongoose");
const { applyTimestamps } = require("./userModel");


const commentSchema=new monogoose.Schema({
    post:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Post",
        required:"true"
    },
    author:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User",
        required:true
    },
    content:{
        type:String,
        required:true
    },
    createdAt:{
        type:Date,
        default:Date.now
    },
},{timestamps:true})

const commentModel= mongoose.model("Comment",commentSchema);

module.exports=commentModel;