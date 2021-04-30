const mongoose = require('mongoose')

const PostSchema = mongoose.Schema({
    postTitle: {
        type: String, 
        required: true,
    }, 
    postLikes: {
        type: Number, 
    }, 
    postComments: { 
        type: String, 
    },
    postPoster:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    } 
})
module.exports = mongoose.model('post', PostSchema)