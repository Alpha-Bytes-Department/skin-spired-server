import { StatusCodes } from 'http-status-codes';
import ApiError from '../../../errors/ApiError';
import { IAns } from './ans.interface';
import { Ans } from './ans.model';
import { QuestionAndAns } from '../quesntionAndAns/quesntionAndAns.model';

const createAns = async (data: IAns) => {
  const isExistUser = await QuestionAndAns.findOne({
    _id: data.questionId,
  });

  if (!isExistUser) {
    throw new ApiError(StatusCodes.NOT_FOUND, 'Question not found');
  }

  const result = await Ans.create(data);
  return result;
};

export const AnsService = {
  createAns,
};
