const express=require("express");
const router=express.Router();
const {signin,signup}=require("../controllers/userController")

router.post("/signup",signup);
router.post("/signin",signin);
//router.use("/totalUsers",totalUsers);

module.exports=router;