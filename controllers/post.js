const Post = require('../models/post');
const asyncHandler = require('../middleware/async');

exports.addpost = asyncHandler(async(req, res)=>{
    const { user_id, title, description } = req.body;
    if(user_id){
        const userpost = await Post.create({ user_id, title, description });
        res.status(200).send({ status: true, data: userpost, msg:'User post has been added' });
    }
    else{
        res.status(200).send({ status: false, msg:'User post could not be created' });
    }
});

exports.userpostslist = asyncHandler(async(req, res)=>{
    const { user_id } = req.params;
    if(user_id){
        const userpostlist = await Post.find({ user_id: user_id });
        res.status(200).send({ status: true, data: userpostlist, msg:'User posts list has been found' });
    }
    else{
        res.status(200).send({ status: false, msg:'User posts list could not be found' });
    }
});