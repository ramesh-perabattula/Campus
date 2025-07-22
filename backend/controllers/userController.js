const jwt=require("jsonwebtoken");
const userModel=require("../models/userModel")
const jwt_secret="ramesh"
const bcrypt = require("bcrypt");


const signup=async (req,res)=>{
    const name=req.body.name;
    const password=req.body.password;
    const studentid=req.body.studentid;

    if(!name | !password | !studentid){
        return res.json({
            message:"please provide all the fields"
        });
    }

    const isUserExist=await userModel.findOne({
        name
    })

    if(isUserExist){
        return res.json({
            message:'user already exist'
        })
    }

    // Hash the password before saving
    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = new userModel({
        name:name,
        password:hashedPassword,
        studentid:studentid
    })

    await newUser.save();

    const token=jwt.sign({
        userId:newUser._id
    },jwt_secret);

    res.json({
        token,
        message:"user registered sucess fully",
        user:{
            name:newUser.name,
            studentid:newUser.studentId
        }
    })
}

const signin=async(req,res)=>{
    const name=req.body.name;
    const password=req.body.password;

    if(!name |!password){
        return res.json({
            message:"please provide all the required fields"
        })
    }

    const checkUser=await userModel.findOne({
        name
    })
    if(!checkUser){
        return res.json({
            message:"user does not exist"
        })
    }

    // Compare the provided password with the hashed password
    const isPasswordMatch = await bcrypt.compare(password, checkUser.password);
    if(!isPasswordMatch){
        return res.json({
            message:"password does not match"
        })
    }

    const token=jwt.sign({
        userId:checkUser._id
    },jwt_secret);

    return res.json({
        token,
        message:"user logged in "
    })
}

module.exports={
    signin,
    signup
}