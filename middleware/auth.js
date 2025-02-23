const jwt = require('jsonwebtoken');
const config = require('config');

//middleware function has access to req-res but then utilizes a callback (next) in this case
module.exports = function(req, res, next) {
  //Get token from header
  const token = req.header('x-auth-token');

  //Check if no token - then send a 401 with a denied
  if (!token) {
    return res.status(401).json({ msg: 'No token, authorization denied' });
  }

  //Verify Token
  try {
    const decoded = jwt.verify(token, config.get('jwtSecret'));

    req.user = decoded.user;
    next();
  } catch (err) {
    res.status(401).json({ msg: 'Token is not valid' });
  }
};
