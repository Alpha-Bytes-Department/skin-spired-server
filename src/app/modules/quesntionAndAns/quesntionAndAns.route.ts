import express from 'express';
import { QuesntionAndAnsController } from './quesntionAndAns.controller';
import auth from '../../middlewares/auth';
import { USER_ROLES } from '../../../enums/user';

const router = express.Router();

router.post(
  '/create-question',
  auth(USER_ROLES.ADMIN),
  QuesntionAndAnsController.createQuesntion
);

router.patch(
  '/update-question/:id',
  auth(USER_ROLES.ADMIN),
  QuesntionAndAnsController.updateQuesntion
);

router.get(
  '/get-all-question',
  auth(USER_ROLES.ADMIN),
  QuesntionAndAnsController.getAllQuesntion
);

router.get(
  '/get-all-question-for-user',
  auth(USER_ROLES.USER),
  QuesntionAndAnsController.getAllQuesntionForUser
);

export const QuesntionAndAnsRoutes = router;
