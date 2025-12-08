import { StatusCodes } from 'http-status-codes';
import catchAsync from '../../../shared/catchAsync';
import sendResponse from '../../../shared/sendResponse';
import { AnsService } from './ans.service';

const createAns = catchAsync(async (req, res) => {
  const userId = req.user.id;

  const value = {
    ...req.body,
    userId,
  };

  const result = await AnsService.createAns(value);
  sendResponse(res, {
    success: true,
    statusCode: StatusCodes.OK,
    message: 'Answer created successfully',
    data: result,
  });
});

const getAllAns = catchAsync(async (req, res) => {
  const result = await AnsService.getAllAns(req.params.id, req.query);
  sendResponse(res, {
    success: true,
    statusCode: StatusCodes.OK,
    message: 'Answer retrived successfully',
    data: result,
  });
});

export const AnsController = {
  createAns,
  getAllAns,
};
