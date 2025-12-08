import { StatusCodes } from 'http-status-codes';
import ApiError from '../../../errors/ApiError';
import { IQuestionAndAns } from './quesntionAndAns.interface';
import { QuestionAndAns } from './quesntionAndAns.model';

const createQuesntion = async (data: IQuestionAndAns) => {
  const isExistData = await QuestionAndAns.findOne({ question: data.question });
  if (isExistData) {
    throw new ApiError(StatusCodes.BAD_REQUEST, 'Question already exist');
  }
  const question = await QuestionAndAns.create(data);
  return question;
};

export const QuesntionAndAnsService = {
  createQuesntion,
};
