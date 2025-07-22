const express=require("express");
const router=express.Router();
const{getComments,addComment}=require("../controllers/commentController");
const authenticateJWT = require("../middleware/userMiddleware");

router.get("/:postId/comments",getComments);
router.post("/:postId/addComment", authenticateJWT, addComment);

module.exports=router;