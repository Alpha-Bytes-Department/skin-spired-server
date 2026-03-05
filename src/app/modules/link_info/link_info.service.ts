import { StatusCodes } from 'http-status-codes';
import ApiError from '../../../errors/ApiError';
import { ILinkInfo } from './link_info.interface';
import { LinkInfo } from './link_info.model';

const createLinkInfo = async (data: ILinkInfo) => {
  const linkInfo = await LinkInfo.create(data);
  return linkInfo;
};

const updateLinkInfo = async (id: string, data: ILinkInfo) => {
  const isExists = await LinkInfo.findById(id);
  if (!isExists) {
    throw new ApiError(StatusCodes.NOT_FOUND, 'Link Info not found');
  }

  const linkInfo = await LinkInfo.findByIdAndUpdate(id, data, {
    new: true,
  });
  return linkInfo;
};

const getAllLinkInfo = async (query: Record<string, any>) => {
  const { page, limit } = query;

  const pages = parseInt(page as string) || 1;
  const size = parseInt(limit as string) || 10;
  const skip = (pages - 1) * size;

  const result = await LinkInfo.find()
    .sort({ createdAt: -1 })
    .skip(skip)
    .limit(size)
    .lean();
  const total = await LinkInfo.countDocuments();

  return {
    result,
    meta: {
      page: pages,
      limit: size,
      total,
    },
  };
};

const getLinkInfoById = async (id: string) => {
  const isExists = await LinkInfo.findById(id);
  if (!isExists) {
    throw new ApiError(StatusCodes.NOT_FOUND, 'Link Info not found');
  }

  const linkInfo = await LinkInfo.findById(id);
  return linkInfo;
};

const deleteLinkInfo = async (id: string) => {
  const isExist = await LinkInfo.findById(id);
  if (!isExist) {
    throw new ApiError(StatusCodes.NOT_FOUND, 'Link Info not found');
  }

  const linkInfo = await LinkInfo.findByIdAndDelete(id);
  return linkInfo;
};

export const LinkInfoService = {
  createLinkInfo,
  updateLinkInfo,
  getAllLinkInfo,
  getLinkInfoById,
  deleteLinkInfo,
};
