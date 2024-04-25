import { Router,Response } from 'express';
// import { authMiddleware } from '@shared/index';
// import { paymentController } from '../controllers';

const router = Router();

// router.post('/checkout', authMiddleware, paymentController.checkout);
router.get('/into',  async (_req, res: Response) => {
    const users = 'Hello , you are into at future'
    res.send(users)
  }) 

export default router;
