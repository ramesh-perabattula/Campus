const jwt = require("jsonwebtoken");
const jwt_secret = "ramesh"; // TODO: Move to environment variable later

const authenticateJWT = (req, res, next) => {
    const authHeader = req.headers["authorization"];
    if (!authHeader || !authHeader.startsWith("Bearer ")) {
        return res.status(401).json({ message: "No token provided" });
    }
    const token = authHeader.split(" ")[1];
    try {
        const decoded = jwt.verify(token, jwt_secret);
        req.user = decoded;
        next();
    } catch (err) {
        return res.status(401).json({ message: "Invalid or expired token" });
    }
};

module.exports = authenticateJWT;
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
        res.user=decoded;
        next();
    }catch(err){
        return res.json({message:"invalid or expired token"});
    }
}

module.exports=authenticateJWT;