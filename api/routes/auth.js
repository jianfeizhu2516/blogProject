import express from 'express';
import { register,login,logout } from '../controllers/authController.js';

const router = express.Router();

//send auth info
router.post("/register",register);
router.post("/login",login);
router.post("/logout",logout);
export default router