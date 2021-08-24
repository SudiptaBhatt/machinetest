const User = require('../models/user');
const asyncHandler = require('../middleware/async');
const bcrypt = require('bcrypt');
const jsonwebtoken = require('jsonwebtoken');

exports.usersignup = asyncHandler(async(req, res)=>{
    const { name, email, phone, password } = req.body;
    var encryptedPassword = bcrypt.hashSync(password, 10)
    if(email, phone){
        const userDetails = await User.findOne({ email: email, phone: phone });
        if(userDetails != null){
            res.status(200).send({ status: false, msg: 'User has already Singed Up' });
        }
    else{
      const user = await User.create({ name, email, phone, password: encryptedPassword, image: req.file.path });
      let token = jsonwebtoken.sign({ "email": user.email, "id": user._id }, process.env.JWTSECERT, { expiresIn: process.env.JWTTIME })
      res.status(200).send({ status: true, 'token': token, data: user, msg:'User Sign Up Successful' });
      }
    }
   else{
       res.status(200).send({ status: false, msg:'User Sing Up Unsuccessful' });
   }
});

exports.login = asyncHandler(async (req, res, next) => {
  const { email, password } = req.body;
  if (email) {
    const userDetails = await User.findOne({ email: email });
    console.log(userDetails)
    if (userDetails != null) {
      const match = await bcrypt.compareSync(password, userDetails.password)
      if (match) {
        let user = userDetails;
        user.password = undefined;
        let token = jsonwebtoken.sign({ "email": user.email, "id": user._id }, process.env.JWTSECERT, { expiresIn: process.env.JWTTIME })
        res.status(200).send({ status: true, 'token': token, data: user, role: 'User', msg: 'User Login Successful' });
      }
      else{
        res.status(200).send({ status: false, msg: 'User Password Incorrect' });
      }
    }
    else {
      res.status(200).send({ status: false, msg: 'Invalid Details' });
    }
  }
});

exports.userdetails = asyncHandler(async(req, res)=>{
  const { id } = req.params;
  if(id){
    const userDetails = await User.findOne({ _id: id });
    res.status(200).send({ status: true, data: userDetails, msg:'User details have been found' });
  }
  else{
    res.status(200).send({ status: false, msg:'User details could not be found' });
  }
});