const User = require('../../models/User'); 
const express = require('express');
const router = express.Router();
const auth = require('../../middleware/auth');
const axios = require('axios')

const jwt = require('jsonwebtoken');
const config = require('config');


// module.exports =  function adminCheck(auth){
//   console.log(auth, 'auth')
//  const data = JSON.parse(auth)
//  console.log(data)  
// }








module.exports = async function ( req,res,next){
  
  try {
        const user = await User.findById(req.user.id);
        console.log(user,'user id ')
        if(user.role != 'admin'){
            return res
            .status(401)
            .json({ msg: 'NOT AUTHORIZED'})
            
          } else {
           //res.status(200).json({msg:'Authorized'})
            next()
          }
          
      } catch (error) {
        console.error(error.message);
        res.status(500).send('server error');
      }


  // const user = await User.findById(req.user.id).select('role');
  // if(user.role != 'admin'){
  //   return res
  //   .status(401)
  //   .json({ msg: 'NOT AUTHORIZED'})
  // } else {
  //   next()
  // }
}




//  router.get('/', auth, async (req,res)=>{
//    console.log(auth, 'auth')
//   try {
//     const user = await User.findById(req.user.id).select('role');
//     console.log(user)
//   } catch (error) {
//     console.error(error.message);
//     res.status(500).send('server error');
//   }
// } )

//  module.exports = router;








