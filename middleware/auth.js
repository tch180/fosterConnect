const jwt = require('jsonwebtoken');
const config = require('config');

module.exports = function (req, res, next) {
  // get token
  const token = req.header('x-auth-token');

  //check if not token
  if (!token) {
    return res
      .status(401)
      .json({ msg: 'No token, auth denied AuthJS MIDDLEWARE' });
  }
  try {
    const decoded = jwt.verify(token, config.get('jwtSecret'));
     req.user = decoded.user;
   
    next()
  } catch (error) {
    res.status(401).json({ msg: 'token is not valid, AuthJS MIDDLEWARE' });
  }
};
