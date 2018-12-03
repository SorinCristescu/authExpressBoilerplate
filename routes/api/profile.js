const express = require('express');
const router = express.Router();

// @route GET api/profie/test
// @description Tests profile route
// @access Public
router.get('/test', (req, res) => res.json({ msg: 'Profile works' }));

module.exports = router;
