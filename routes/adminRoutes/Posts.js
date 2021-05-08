const express = require("express");
const User = require("../../models/User");
const auth = require("../../middleware/auth");
const adminCheck = require('./adminCheck')
const router = express.Router();
const Post = require("../../models/Post");


// Admin Route to get all post
//@desc Get all the post
// ACCESS PRIVATE:
router.get("/",auth,adminCheck, async (req, res) => {
    console.log('success')
  try {
    
    console.log("am I working");
    const getAllPost = await Post.find({ post: req.post });
    res.json(getAllPost);
  } catch (error) {
    console.error(error.message);
    res.status(500).send("server error in admin post routes");
  }
});

//Admin route to get ONE POST BY ID
router.get("/:id", auth,adminCheck,async (req, res) => {
  console.log("getting one post by id");
  try {
    let getOnePostById = await Post.findById(req.params.id);
    console.log(getOnePostById);
    res.json(getOnePostById);
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Server error admin routes post");
  }
});

//Admin route to delete post by ID

router.delete("/:id",auth,adminCheck, async (req, res) => {
  console.log("about to delete this post");
  try {
    await Post.findByIdAndDelete(req.params.id);
    res.json({ msg: "Post Deleted" });
    console.log("post deleted");
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Server Error deleting post");
  }
});

module.exports = router;
