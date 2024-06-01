const express=require('express');
const UserController=require('../controllers/user');


const router=express.Router();


router.get('/signup',UserController.signUp);
router.post('/submit-user', UserController.submitUser);
router.get('/login',UserController.login);
router.post('/loginpage',UserController.loginPage);
router.get('/chatpage',UserController.chatPage);





module.exports=router;