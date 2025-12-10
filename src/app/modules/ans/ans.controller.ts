import { StatusCodes } from 'http-status-codes';
import catchAsync from '../../../shared/catchAsync';
import sendResponse from '../../../shared/sendResponse';
import { AnsService } from './ans.service';
import ApiError from '../../../errors/ApiError';

const createAns = catchAsync(async (req, res) => {
  const userId = req.user.id;

  const bodyData = Array.isArray(req.body)
    ? req.body
    : Array.isArray(req.body?.data)
    ? req.body.data
    : [];

  if (bodyData.length === 0) {
    throw new ApiError(StatusCodes.BAD_REQUEST, 'No answer data provided');
  }

  // ✅ Inject userId into every object
  const payload = bodyData.map((item: any) => ({
    ...item,
    userId,
  }));

  const result = await AnsService.createAns(payload);

  sendResponse(res, {
    success: true,
    statusCode: StatusCodes.CREATED,
    message: 'Answers created successfully',
    data: result,
  });
});

const getAllAns = catchAsync(async (req, res) => {
  const result = await AnsService.getAllAns(req.params.id, req.query);
  sendResponse(res, {
    success: true,
    statusCode: StatusCodes.OK,
    message: 'Answer retrived successfully',
    data: result,
  });
});

const getAllAnsByUserId = catchAsync(async (req, res) => {
  const result = await AnsService.getAllAnsByUserId(req.params.id, req.query);
  sendResponse(res, {
    success: true,
    statusCode: StatusCodes.OK,
    message: 'Answer retrived successfully',
    data: result,
  });
});

export const AnsController = {
  createAns,
  getAllAns,
  getAllAnsByUserId,
};
