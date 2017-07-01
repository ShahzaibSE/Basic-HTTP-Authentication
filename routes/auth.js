const express = require('express');
const router = express.Router();

//Controller.
const acl = require('./../controllers/acl');

//Controller
const authController = require('./../controllers/auth');

router.post('/check',acl.isAuthenticated,authController.authReq);

module.exports = router;