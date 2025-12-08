import express from 'express';
import auth from '../../middlewares/auth';
import { USER_ROLES } from '../../../enums/user';
import { AnsController } from './ans.controller';

const router = express.Router();

router.post('/create-ans', auth(USER_ROLES.USER), AnsController.createAns);

router.get('/get-ans/:id', auth(USER_ROLES.ADMIN), AnsController.getAllAns);

export const AnsRoutes = router;
