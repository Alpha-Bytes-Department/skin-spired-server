import express from 'express';
import { QuesntionAndAnsController } from './quesntionAndAns.controller';
import auth from '../../middlewares/auth';
import { USER_ROLES } from '../../../enums/user';

const router = express.Router();

router.post(
  '/create-quesntion',
  auth(USER_ROLES.ADMIN),
  QuesntionAndAnsController.createQuesntion
);

export const QuesntionAndAnsRoutes = router;
