const express = require('express')
const router = express.Router();
const auth = require('../middleware/auth')
const { check, validationResult } = require('express-validator');

const Post = require('../models/Post')


// GET ROUTE 
// @desc get all the post for that user
// Access private
router.get('/', auth, async (req,res)=>{
    console.log('starting get route for users post')
    try {
        const getAllUsersPost = await Post.find({user: req.user.id})
        res.json(getAllUsersPost)
        console.log(getAllUsersPost,' got all the users post')
        // console.table(getAllUsersPost)
    } catch (error) {
        console.error(error.message)
        res.status(500).send('server error in post route for user')
    }
})





// POST ROUTE FOR POST
//@desc add a new post for the user
//Access PRIVATE: 

router.post('/', auth,async(req,res)=>{
        const {postTitle,postText } = req.body
    try {
        console.log('starting the post')
        const newPost = new Post ({
            postTitle,
            postText,
            user:req.user.id
        })
        const post = await newPost.save();
        console.log(newPost.user, "checking new post")
        res.json(post);
    } catch (error) {
        console.error(error.message)
        res.status(500).send('routes error check posts post')
    }
})


//UPDATE ROUTE FOR POST
// @desc update a post for the user
//access PRIVATE:




//DELETE ROUTE FOR POST
//@desc delete a post for the user
//access PRIVATE: 




















module.exports = router; 