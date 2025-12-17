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

const updateOption = async (id: string, data: IQuestionOption) => {
  const isExist = await QuestionOption.findById(id);
  if (!isExist) {
    throw new ApiError(StatusCodes.NOT_FOUND, 'option not found');
  }
  const result = await QuestionOption.findByIdAndUpdate(id, data, {
    new: true,
  });
  return result;
};

const getAllOption = async (questionId: string, query: Record<string, any>) => {
  const { page, limit } = query;

  const pages = parseInt(page as string) || 1;
  const size = parseInt(limit as string) || 10;
  const skip = (pages - 1) * size;

  const result = await QuestionOption.find({ questionId })
    .populate({
      path: 'questionId',
      select: 'question',
    })
    .sort({ createdAt: -1 })
    .skip(skip)
    .limit(size)
    .lean();

  const total = await QuestionOption.countDocuments({ questionId });

  return {
    result,
    meta: {
      page: pages,
      limit: size,
      total,
    },
  };
};

export const QuestionOptionService = {
  createQuestionOption,
  updateOption,
  getAllOption,
};
