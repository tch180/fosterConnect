const express = require('express')
const router = express.Router();
const Users = require('../../models/User'); 




// Admin Route to get all users
//@desc Get all the users in the DB
//ACCESS PRIVATE: 

router.get('/', async(req,res)=>{
    console.log('getting the users')
    try {
       const getAllUsers = await Users.find({user: req.user})
       res.json(getAllUsers) 
    } catch (error) {
        console.error(error.message); 
        res.status(500).send('server error admin routes')
    }
})

module.exports = router;