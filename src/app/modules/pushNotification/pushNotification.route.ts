import express from 'express';
import { PushNotificationController } from './pushNotification.controller';
import { USER_ROLES } from '../../../enums/user';
import auth from '../../middlewares/auth';

const router = express.Router();

router.post(
  '/send',
  //   auth(USER_ROLES.USER),
  PushNotificationController.sendNotification
);

router.get(
  '/get-all',
  auth(USER_ROLES.USER),
  PushNotificationController.getAllMyNotification
);

export const PushNotificationRoutes = router;
