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

export const LinkInfoController = {
  createLinkInfo,
};
