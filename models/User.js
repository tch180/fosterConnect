const mongoose = require('mongoose')

const UserSchema = mongoose.Schema({
firstName: {
    type: String,  
}, 
lastName: {
    type: String,       
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
    default:'user'
    
    },

})


module.exports = mongoose.model('user', UserSchema)






