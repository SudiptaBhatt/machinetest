const express = require('express');
const { usersignup, login, userdetails } = require('../controllers/user');
const upload = require('../utils/imageupload');
const Authentication = require('../middleware/authentication');
const router = express.Router();

router.post('/user-registration',upload.single('image'),usersignup);
router.post('/login',login);
router.get('/user-details/:id',Authentication.Authenticate,userdetails);

module.exports = router;