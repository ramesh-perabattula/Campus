const commentModel=require('../models/commentModel');
const mongoose=require('mongoose');
const postModel=require("../models/postModel")

const getComments=async(req,res)=>{
    const comments=await commentModel.find({post:req.params.postId});
    res.json(comments);
}


const addComment=async(req,res)=>{
    const {content}=req.body;
    const postId=req.params.postId;

    if(!content){
        return res.json({message:"comment not be empty"});
    }
    if(!postId){
        return res.json({message:"post doesnot exits"});
    }

    const post = await postModel.findById(postId);
    if(!post){
        return res.json({message:"post does not exist"});
    }

    const comment = new commentModel({
        post:postId,
        author:req.user._id,
        content:content
    })

    await comment.save();
}

module.exports={
    getComments,
    addComment
}