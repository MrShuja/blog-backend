import express from 'express';
const router = express.Router();
import {subscribeController} from '../controllers/subscribe.controller.js';



router.post('/subscribe', subscribeController);

export default router;
