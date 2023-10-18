import express from "express";
import { protect } from '../middleware/authMiddleware'
import * as userController from '../controllers/userControllers'


const router = express.Router();

router.post('/register', userController.registerUser);
router.post('/login', userController.loginUser);
router.post('/profile').get(protect, userController.getUserProfile);

export default router