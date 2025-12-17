import express from 'express';
import auth from '../../middlewares/auth';
import { USER_ROLES } from '../../../enums/user';
import { QuestionOptionController } from './questionOption.controler';

const router = express.Router();

router.post(
  '/create-question-option',
  auth(USER_ROLES.ADMIN),
  QuestionOptionController.createQuestionOption
);

router.patch(
  '/update-question-option/:id',
  auth(USER_ROLES.ADMIN),
  QuestionOptionController.updateOption
);

router.get(
  '/get-all-question-option/:id',
  auth(USER_ROLES.ADMIN),
  QuestionOptionController.getAllOption
);

export const QuestionOptionRoutes = router;
