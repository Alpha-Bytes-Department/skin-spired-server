import { StatusCodes } from 'http-status-codes';
import catchAsync from '../../../shared/catchAsync';
import getFilePath, { getFilePathMultiple } from '../../../shared/getFilePath';
import sendResponse from '../../../shared/sendResponse';
import { PersonalisationService } from './personalisation.service';

const createPersonalisation = catchAsync(async (req, res) => {
  const userId = req.user.id;

  const value = {
    userId,
    ...req.body,
  };

  const result = await PersonalisationService.createPersonalisation(value);

  sendResponse(res, {
    success: true,
    statusCode: StatusCodes.CREATED,
    message: 'Personalisation created successfully',
    data: result,
  });
});

export const PersonalisationController = {
  createPersonalisation,
};
