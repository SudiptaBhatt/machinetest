const express = require('express');
const { addpost, userpostslist } = require('../controllers/post');
const router = express.Router();

router.post('/add-post',addpost);
router.get('/user-posts-list/:user_id',userpostslist);

module.exports = router;