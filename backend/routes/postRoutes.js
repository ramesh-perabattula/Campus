const express=require("express");
const router=express.Router();
const{getAllPosts,createPost}=require("../controllers/postController");


router.post("/create-post",createPost);
router.get("/get-all-posts",getAllPosts);
module.exports=router;