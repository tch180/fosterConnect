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
// Admin Route to get ONE USER 
//@desc GET ONE USER BY ID
//ACCESS PRIVATE: 

router.get('/:id', async(req,res)=>{
    console.log('getting the one user by id ')
    try {
       let getOneUserById = await Users.findById(req.params.id)
       console.log(getOneUserById)
       res.json(getOneUserById) 
    } catch (error) {
        console.error(error.message); 
        res.status(500).send('server error admin routes')
    }
})
// Admin Route to Edit a user
//@desc edit user 
//ACCESS PRIVATE: 

router.put('/:id',async(req,res)=>{
    console.log('starting to update the user')
    const {role,lastName,firstName,email} = req.body
    //USERS OBJECT FIELDS
    const userFields = {}
    if(role) userFields.role = role 
    if(lastName) userFields.lastName = lastName
    if(firstName) userFields.firstName = firstName
    if(email) userFields.email = email
    try {
        // find the user by id 
        let findTheUserById = await Users.findById(req.params.id);
        console.log('finding the user by id')
        if(!findTheUserById) return res.status(404).json({msg: 'User Not Found'})
        findTheUserById = await Users.findByIdAndUpdate(
            req.params.id,
            {$set: userFields},
            {new: true}
        ); 
        res.json(findTheUserById)
        console.log('user updated')
    } catch (error) {
        console.error(error.message)
        res.status(500).send('server error admin user update')
    }
})






module.exports = router;