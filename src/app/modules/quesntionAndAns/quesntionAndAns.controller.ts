import { StatusCodes } from 'http-status-codes';
import catchAsync from '../../../shared/catchAsync';
import sendResponse from '../../../shared/sendResponse';
import { QuesntionAndAnsService } from './quesntionAndAns.service';

const createQuesntion = catchAsync(async (req, res) => {
  const result = await QuesntionAndAnsService.createQuesntion(req.body);
  sendResponse(res, {
    success: true,
    statusCode: StatusCodes.OK,
    message: 'Quesntion created successfully',
    data: result,
  });
});

export const QuesntionAndAnsController = {
  createQuesntion,
};
