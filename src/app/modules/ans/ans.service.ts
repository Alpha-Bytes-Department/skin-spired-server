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

const getAllAns = async (id: string, query: Record<string, any>) => {
  const { page, limit } = query;

  const pages = parseInt(page as string) || 1;
  const size = parseInt(limit as string) || 10;
  const skip = (pages - 1) * size;

  const result = await Ans.find({ questionId: id })
    .sort({ createdAt: -1 })
    .skip(skip)
    .limit(size)
    .lean();

  const total = await Ans.countDocuments({ questionId: id });

  return {
    result,
    meta: {
      page: pages,
      limit: size,
      total,
    },
  };
};

const getAllAnsByUserId = async (id: string, query: Record<string, any>) => {
  const { page, limit } = query;

  const pages = parseInt(page as string) || 1;
  const size = parseInt(limit as string) || 10;
  const skip = (pages - 1) * size;

  const result = await Ans.find({ userId: id })
    .populate({
      path: 'questionId',
      select: 'question',
    })
    .sort({ createdAt: -1 })
    .skip(skip)
    .limit(size)
    .lean();

  const total = await Ans.countDocuments({ userId: id });

  return {
    result,
    meta: {
      page: pages,
      limit: size,
      total,
    },
  };
};

export const AnsService = {
  createAns,
  getAllAns,
  getAllAnsByUserId,
};
