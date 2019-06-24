import express from 'express';
import botController from './controllers/BotController';
import securityController from './controllers/SecurityController';
import userController from './controllers/UserController';
import passport from 'passport';

const router = express.Router();

router.post('/bot', passport.authenticate('jwt', { session: false, }), botController.create);
router.patch('/bot', passport.authenticate('jwt', { session: false, }), botController.update);

router.patch('/user', passport.authenticate('jwt', { session: false, }), userController.update);

router.get('/protected', passport.authenticate('jwt', { session: false, }), botController.index);

router.post('/authenticate', securityController.authenticate);
router.post('/register', securityController.register);

export default router;