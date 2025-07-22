const jwt=require("jsonwebtoken");
const jwt_secret='ramesh';

const authenticateJWT=(req,res,next)=>{
    const header=req.headers['authorization'];
    if(!header){
        return res.json({message:"no token provided"});
    }

    try{
        const token=header;
        const decoded=jwt.verify(token,jwt_secret);
        req.user=decoded;
        next();
    }catch(err){
        return res.json({message:"invalid or expired token"});
    }
}

module.exports=authenticateJWT;