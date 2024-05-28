const express=require('express');

const UserController=require('../controllers/chat');


const router=express.Router();


router.get('/chatpage',UserController.chatPage);
router.get('/onlineusers',UserController.onlineUsers)




module.exports=router;