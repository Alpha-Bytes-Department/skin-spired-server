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

export const QuestionOptionController = {
  createQuestionOption,
};
