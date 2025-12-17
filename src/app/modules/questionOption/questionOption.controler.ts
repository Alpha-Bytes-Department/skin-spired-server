import { StatusCodes } from 'http-status-codes';
import catchAsync from '../../../shared/catchAsync';
import sendResponse from '../../../shared/sendResponse';
import { QuestionOptionService } from './questionOption.service';

const createQuestionOption = catchAsync(async (req, res) => {
  const result = await QuestionOptionService.createQuestionOption(req.body);
  sendResponse(res, {
    success: true,
    statusCode: StatusCodes.CREATED,
    message: 'QuestionOption created successfully',
    data: result,
  });
});

const updateOption = catchAsync(async (req, res) => {
  const result = await QuestionOptionService.updateOption(
    req.params.id,
    req.body
  );
  sendResponse(res, {
    success: true,
    statusCode: StatusCodes.OK,
    message: 'QuestionOption updated successfully',
    data: result,
  });
});

const getAllOption = catchAsync(async (req, res) => {
  const result = await QuestionOptionService.getAllOption(
    req.params.id,
    req.query
  );
  sendResponse(res, {
    success: true,
    statusCode: StatusCodes.OK,
    message: 'QuestionOption retrived successfully',
    data: result,
  });
});

const deleteOption = catchAsync(async (req, res) => {
  const result = await QuestionOptionService.deleteOption(req.params.id);
  sendResponse(res, {
    success: true,
    statusCode: StatusCodes.OK,
    message: 'QuestionOption deleted successfully',
    data: result,
  });
});

const getAllOptionForUser = catchAsync(async (req, res) => {
  const result = await QuestionOptionService.getAllOptionForUser(req.query);
  sendResponse(res, {
    success: true,
    statusCode: StatusCodes.OK,
    message: 'QuestionOption retrived successfully',
    data: result,
  });
});

export const QuestionOptionController = {
  createQuestionOption,
  updateOption,
  getAllOption,
  deleteOption,
  getAllOptionForUser,
};
