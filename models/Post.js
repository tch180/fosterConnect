const mongoose = require('mongoose')

const PostSchema = mongoose.Schema({
    postTitle: {
        type: String, 
        required: true,
    }, 
    postText:{
        type: String,
        required: true
    },
    postLikes: {
        type: Number, 
    }, 
    postComments: { 
        type: String, 
    },
    user:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'user'
    } 
})
module.exports = mongoose.model('post', PostSchema)