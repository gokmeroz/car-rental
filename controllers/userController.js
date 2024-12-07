const User = require("../models/userModel");

exports.signup = async (req, res) => {
  try {
    const user = await User.create(req.body);

    res.status(200).json({
      status: "success",
      user,
    });
  } catch (err) {
    console.log(err);
  }
};
exports.login = (req, res) => {

};
exports.getAllUsers = async (req, res) => {
    try {
        const users = await User.find();
        
        res.status(200).json({
            status: 'success',
            users,
        });

    } catch (err){
        console.log(err);
    }
};
exports.getUserWithId = async (req, res) => {
    try {
        const user = await User.findById(req.params.id);
        
        res.status(200).json({
            status: 'success',
            user,
        });
        
    } catch (err){
        console.log(err);
    }
};
exports.updateUserInfo = async (req, res) => {
    try {
        const user = await User.findByIdAndUpdate(req.params.id, req.body, {
            new: true,
            runValidators:true
        });
        
        res.status(200).json({
            status: 'success',
            user,
        });
        
    } catch (err){
        console.log(err);
    }
};
exports.deleteUser = async (req, res) => {
    try {
       await User.findByIdAndDelete(req.params.id);
        
        res.status(200).json({
            status: 'success',
            data: null,
        });
        
    } catch (err){
        console.log(err);
    }
};