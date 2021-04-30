const mongoose = require('mongoose')

const UserSchema = mongoose.Schema({
name: {
    type: String,
    required:true, 
    unique: true,
}, 
email: {
    type: String, 
    required: true,
    unique: true,
}, 
password: {
    type: String,
    required: true, 
    minlength: 8,
}, 
date: {
    type: Date, 
    default: Date.now,
}, 
role: {
    type: String, 
    enum:['admin', 'restricted', 'mentor', 'mod', 'user'],
    required: true
    },

})


module.exports = mongoose.model('user', UserSchema)






