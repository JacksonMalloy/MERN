const express = require('express');
const router = express.Router();

// @route   GET API/users (The actual request type and the endpoint - api/users)
// @desc    Test Route (Whatever it is the route does (ex. Register User, Add Profile...))
// @access  Public (Whether this is Public or Private (if you need a token to access a specific route ex. add profile)
router.get('/', (req, res) => res.send('User Route'));

module.exports = router;
