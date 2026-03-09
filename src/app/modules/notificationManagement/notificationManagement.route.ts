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

export const NotificationManagementRoutes = router;
