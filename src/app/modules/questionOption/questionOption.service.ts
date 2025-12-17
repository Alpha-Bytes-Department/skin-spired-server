import { StatusCodes } from 'http-status-codes';
import ApiError from '../../../errors/ApiError';
import { QuestionAndAns } from '../quesntionAndAns/quesntionAndAns.model';
import { IQuestionOption } from './questionOption.interface';
import { QuestionOption } from './questionOption.model';

const createQuestionOption = async (data: IQuestionOption) => {
  const isExist = await QuestionAndAns.findById(data.questionId);
  if (!isExist) {
    throw new ApiError(StatusCodes.NOT_FOUND, 'Question not found');
  }

  const result = await QuestionOption.create(data);
  return result;
};

export const QuestionOptionService = {
  createQuestionOption,
};
