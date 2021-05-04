const express = require('express')
const router = express.Router();
const { check, validationResult } = require('express-validator');

const Post = require('../models/Post')








// POST ROUTE FOR POST
//@desc add a new post for the user
//Access PRIVATE: 

router.post('/', [check('postTitle', 'Post Title is required').not().isEmpty()],
async (req,res)=>{
    const postErrors = validationResult(req);
        if (!postErrors.isEmpty()){
            return res.status(400).json({ errors: errors.array() });
        }
        const {postTitle,postText,postPoster } = req.body
    try {
        console.log('starting the post')
        const newPost = new Post ({
            postTitle,
            postText,
            user:req.params.id
        })
        
        const post = await newPost.save();
        res.json(post);
    } catch (error) {
        console.error(error.message)
        res.status(500).send('routes error check posts post')
    }
})






















module.exports = router; 