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

const updateQuesntion = async (id: string, data: IQuestionAndAns) => {
  const isQuestionExist = await QuestionAndAns.findById(id);
  if (!isQuestionExist) {
    throw new ApiError(StatusCodes.NOT_FOUND, 'Question not found');
  }

  const question = await QuestionAndAns.findOneAndUpdate({ _id: id }, data, {
    new: true,
  });
  return question;
};

const getAllQuesntion = async (query: Record<string, any>) => {
  const { page, limit, isVisible } = query;

  const pages = parseInt(page as string) || 1;
  const size = parseInt(limit as string) || 10;
  const skip = (pages - 1) * size;

  const filter: any = {};

  if (isVisible) {
    filter.isVisible = isVisible;
  }

  const result = await QuestionAndAns.find(filter)
    .sort({ createdAt: -1 })
    .skip(skip)
    .limit(size)
    .lean();

  const total = await QuestionAndAns.countDocuments(filter);

  return {
    result,
    meta: {
      page: pages,
      limit: size,
      total,
    },
  };
};

const getAllQuesntionForUser = async (query: Record<string, any>) => {
  const { page, limit } = query;

  const pages = parseInt(page as string) || 1;
  const size = parseInt(limit as string) || 10;
  const skip = (pages - 1) * size;

  const result = await QuestionAndAns.find({ isVisible: true })
    .sort({ createdAt: -1 })
    .skip(skip)
    .limit(size)
    .lean();

  const total = await QuestionAndAns.countDocuments({ isVisible: true });

  return {
    result,
    meta: {
      page: pages,
      limit: size,
      total,
    },
  };
};

export const QuesntionAndAnsService = {
  createQuesntion,
  updateQuesntion,
  getAllQuesntion,
  getAllQuesntionForUser,
};
