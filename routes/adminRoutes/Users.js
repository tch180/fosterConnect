const express = require("express");
const router = express.Router();
const auth = require("../../middleware/auth");
const User = require("../../models/User");
const adminCheck = require("./adminCheck");

// Admin Route to get all users
//@desc Get all the users in the DB
//ACCESS PRIVATE:

router.get("/",auth,adminCheck,   async (req, res) => {
  console.log("getting the users");
  try {
    const getAllUsers = await User.find({ user: req.params.user });
    // console.log(getAllUsers, "----------getallusers");
    res.json(getAllUsers);
  } catch (error) {
    console.error(error.message);
     res.status(500).send('server error admin routes')
  }
});

// Admin Route to get ONE USER
//@desc GET ONE USER BY ID
//ACCESS PRIVATE && ROLE RESTRICTED

router.get("/:id",auth,adminCheck, async (req, res) => {
  console.log("getting the one user by id ");
  try {
    let getOneUserById = await User.findById(req.params.id);
    console.log(getOneUserById);
    res.json(getOneUserById);
  } catch (error) {
    console.error(error.message);
    res.status(500).send("server error admin routes");
  }
});
// Admin Route to Edit a user
//@desc edit user
//ACCESS PRIVATE && ROLE RESTRICTED

router.put("/:id", async (req, res) => {
  console.log("starting to update the user");
  const { role, lastName, firstName, email } = req.body;
  //USERS OBJECT FIELDS
  const userFields = {};
  if (role) userFields.role = role;
  if (lastName) userFields.lastName = lastName;
  if (firstName) userFields.firstName = firstName;
  if (email) userFields.email = email;
  try {
    // find the user by id
    let findTheUserById = await User.findById(req.params.id);
    console.log("finding the user by id");
    if (!findTheUserById)
      return res.status(404).json({ msg: "User Not Found" });
    findTheUserById = await User.findByIdAndUpdate(
      req.params.id,
      { $set: userFields },
      { new: true }
    );
    res.json(findTheUserById);
    console.log("user updated");
  } catch (error) {
    console.error(error.message);
    res.status(500).send("server error admin user update");
  }
});

// ROUTE DELETE 
//@desc Delete a user 
//ACCESS PRIVATE && ROLE RESTRICTED
router.delete("/:id",auth,adminCheck,async(req,res)=>{
try {
    let findUser = await User.findById(req.params.id);
    if(!findUser) return res.status(404).json({msg: 'User not found'})
    await User.findByIdAndRemove(req.params.id)
    console.log('user Deleted')
    res.json({msg: 'User has been deleted'})
} catch (error) {
    console.log(error.message)
    res.status(500).send('Server Error delete route admin')
}




})


module.exports = router;
