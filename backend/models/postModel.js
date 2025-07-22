const mongoose=require('mongoose');

const postSchema=new mongoose.Schema({
    type:{
        type:String,
        required:true,
        enum:['lost','found']
    },
    title:{
        type:String,
        required:true,
    },
    description:{
        type:String,
        required:true
    },
    category:{
        type:String,
        required:true
    },
    location:{
        type:String,
        required:true
    },
    author:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'User',
        //required:true
    },
    image:{
        type:String,
        default:null
    },
    createdAt:{
        type:Date,
        deafult:Date.now
    }
})

const postModel=mongoose.model('Post',postSchema);

module.exports=postModel;