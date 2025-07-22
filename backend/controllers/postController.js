const postModel=require('../models/postModel');
const mongoose=require('mongoose');


const getAllPosts=async(res,req)=>{
    const posts=await postModel.find();
    return res.json({posts});
}

const createPost=async (req,res)=>{

    const {
        type,
        title,
        description,
        category,
        location
    }=req.body;

    if(!type|!title|!description|!category|!location){
        return res.json({
            message:"some fields are missing"
        });
    }

    const postData=new postModel({
        type:type,
        title:title,
        description:description,
        category:category,
        location:location,
    })

    await postData.save();

    return res.json({
        type,
        title,
        description,
        category,
        location
    }) 
}

module.exports={
    getAllPosts,
    createPost
}