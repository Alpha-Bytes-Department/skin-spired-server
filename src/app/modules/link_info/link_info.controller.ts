import { StatusCodes } from 'http-status-codes';
import catchAsync from '../../../shared/catchAsync';
import sendResponse from '../../../shared/sendResponse';
import { LinkInfoService } from './link_info.service';

const createLinkInfo = catchAsync(async (req, res) => {
  const result = await LinkInfoService.createLinkInfo(req.body);
  sendResponse(res, {
    statusCode: StatusCodes.CREATED,
    success: true,
    message: 'Link Info created successfully',
    data: result,
  });
});

const updateLinkInfo = catchAsync(async (req, res) => {
  const result = await LinkInfoService.updateLinkInfo(req.params.id, req.body);
  sendResponse(res, {
    statusCode: StatusCodes.CREATED,
    success: true,
    message: 'Link Info updated successfully',
    data: result,
  });
});

const getAllLinkInfo = catchAsync(async (req, res) => {
  const result = await LinkInfoService.getAllLinkInfo(req.query);
  sendResponse(res, {
    statusCode: StatusCodes.CREATED,
    success: true,
    message: 'Link Info retrived successfully',
    data: result,
  });
});

const getLinkInfoById = catchAsync(async (req, res) => {
  const result = await LinkInfoService.getLinkInfoById(req.params.id);
  sendResponse(res, {
    statusCode: StatusCodes.CREATED,
    success: true,
    message: 'Link Info retrived successfully',
    data: result,
  });
});

const deleteLinkInfo = catchAsync(async (req, res) => {
  const result = await LinkInfoService.deleteLinkInfo(req.params.id);
  sendResponse(res, {
    statusCode: StatusCodes.CREATED,
    success: true,
    message: 'Link Info deleted successfully',
    data: result,
  });
});

export const LinkInfoController = {
  createLinkInfo,
  updateLinkInfo,
  getAllLinkInfo,
  getLinkInfoById,
  deleteLinkInfo,
};
