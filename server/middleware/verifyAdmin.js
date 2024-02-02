const jwt = require('jsonwebtoken');
const Admin = require('../models/admin'); 

// middleware/verifyLoggedIn.js


const verifyAdmin = () => {
  return async (req, res, next) => {
    try {
      const token = req.cookies.token;

      if (!token) {
        return res.status(401).json({ success: false, message: 'Unauthorized: No token provided' });
      }

      const decoded = jwt.verify(token, process.env.JWT_SECRET);

      // Check if the token has expired
      if (Date.now() >= decoded.exp * 1000) {
        return res.status(401).json({ success: false, message: 'Unauthorized: Token has expired' });
      }

      const user = await Admin.findById({ _id: decoded.id });

      if (!user) {
        return res.status(401).json({ success: false, message: 'Unauthorized: Invalid user' });
      }

      req.user = user; // Attach the user object to the request for later use
      next();
    } catch (error) {
      console.error(error);
      return res.status(401).json({ success: false, message: 'Unauthorized: Invalid token' });
    }
  };
};

module.exports = {verifyAdmin};
