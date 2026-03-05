import express from 'express';
import auth from '../../middlewares/auth';
import { USER_ROLES } from '../../../enums/user';
import { LinkInfoController } from './link_info.controller';

const router = express.Router();

router.post(
  '/create',
  auth(USER_ROLES.ADMIN),
  LinkInfoController.createLinkInfo,
);

export const LinkInfoRoutes = router;
