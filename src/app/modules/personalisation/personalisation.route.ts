import express, { NextFunction, Request, Response } from 'express';
import { USER_ROLES } from '../../../enums/user';
import auth from '../../middlewares/auth';
import fileUploadHandler from '../../middlewares/fileUploadHandler';
import { PersonalisationController } from './personalisation.controller';
import { personalisationValidation } from './personalisation.validation';
import validateRequest from '../../middlewares/validateRequest';

const router = express.Router();

router.post(
  '/create',
  auth(USER_ROLES.USER),
  validateRequest(personalisationValidation),
  PersonalisationController.createPersonalisation
);

export const PersonalisationRoutes = router;
