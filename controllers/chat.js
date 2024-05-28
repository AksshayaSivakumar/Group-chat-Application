const path=require('path');
const rootDir=require('../util/path');
const User=require('../models/user');

const chatPage=async(req, res) =>{
    res.sendFile(path.join(rootDir,'views','chat.html'));
  }

  const onlineUsers=async(req,res)=>{
    const users= await User.findAll()
    console.log(users)
    return res.status(201).json({users})
  }

  module.exports={
    chatPage,
    onlineUsers
  }