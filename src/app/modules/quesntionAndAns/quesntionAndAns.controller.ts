import { StatusCodes } from 'http-status-codes';
import catchAsync from '../../../shared/catchAsync';
import sendResponse from '../../../shared/sendResponse';
import { QuesntionAndAnsService } from './quesntionAndAns.service';

const createQuesntion = catchAsync(async (req, res) => {
  const result = await QuesntionAndAnsService.createQuesntion(req.body);
  sendResponse(res, {
    success: true,
    statusCode: StatusCodes.CREATED,
    message: 'Quesntion created successfully',
    data: result,
  });
});

const updateQuesntion = catchAsync(async (req, res) => {
  const result = await QuesntionAndAnsService.updateQuesntion(
    req.params.id,
    req.body
  );
  sendResponse(res, {
    success: true,
    statusCode: StatusCodes.OK,
    message: 'Quesntion updated successfully',
    data: result,
  });
});

const getAllQuesntion = catchAsync(async (req, res) => {
  const result = await QuesntionAndAnsService.getAllQuesntion(req.query);
  sendResponse(res, {
    success: true,
    statusCode: StatusCodes.OK,
    message: 'Quesntion retrieved successfully',
    data: result,
  });
});

export const QuesntionAndAnsController = {
  createQuesntion,
  updateQuesntion,
  getAllQuesntion,
};
