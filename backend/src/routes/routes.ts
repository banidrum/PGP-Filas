import { Router } from 'express';
import UserController from '../controllers/userController';

const router = Router();

router.get('/', (req, res) => {
    res.send("Hello!")
});

router.post('/user/register', (req, res) => {
    
});

export default router;