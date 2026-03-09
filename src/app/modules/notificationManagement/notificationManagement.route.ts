import express from 'express';
import { USER_ROLES } from '../../../enums/user';
import auth from '../../middlewares/auth';
import { NotificationManagementController } from './notificationManagement.controller';

const router = express.Router();

router.patch(
  '/update',
  auth(USER_ROLES.ADMIN),
  NotificationManagementController.updateNotificationManagement,
);

router.get(
  '/get-notification-management',
  auth(USER_ROLES.ADMIN, USER_ROLES.USER),
  NotificationManagementController.getNotificationManagement,
);

export const NotificationManagementRoutes = router;
