const express=require("express");
const router=express.Router();
const{getComments,addComment}=require("../controllers/commentController");

router.get("/:Id/comments",getComments);
router.post("/:id/addComment",addComment);

module.exports=router;