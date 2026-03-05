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

router.patch(
  '/update/:id',
  auth(USER_ROLES.ADMIN),
  LinkInfoController.updateLinkInfo,
);

router.get(
  '/get-all',
  auth(USER_ROLES.ADMIN, USER_ROLES.USER),
  LinkInfoController.getAllLinkInfo,
);

router.get(
  '/get-by-id/:id',
  auth(USER_ROLES.ADMIN, USER_ROLES.USER),
  LinkInfoController.getLinkInfoById,
);

router.delete(
  '/delete/:id',
  auth(USER_ROLES.ADMIN),
  LinkInfoController.deleteLinkInfo,
);

export const LinkInfoRoutes = router;
