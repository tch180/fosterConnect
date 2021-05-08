const User = require("../../models/User");

module.exports = async function (req, res, next) {
  try {
    const user = await User.findById(req.user.id);
    console.log(user, "user id ");
    if (user.role != "admin") {
      return res.status(401).json({ msg: "NOT AUTHORIZED" });
    } else {
      //res.status(200).json({msg:'Authorized'}) /// WILL NOT WORK cant send 2 responses to the same route.
      next();
    }
  } catch (error) {
    console.error(error.message);
    res.status(500).send("server error");
  }
};
