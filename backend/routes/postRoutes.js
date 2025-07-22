const express=require("express");
const router=express.Router();
const{getAllPosts,createPost}=require("../controllers/postController");
const authenticateJWT = require("../middleware/userMiddleware");

router.post("/create-post", authenticateJWT, createPost);
router.get("/get-all-posts",getAllPosts);
module.exports=router;