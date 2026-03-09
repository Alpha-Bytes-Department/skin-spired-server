import { StatusCodes } from 'http-status-codes';
import catchAsync from '../../../shared/catchAsync';
import sendResponse from '../../../shared/sendResponse';
import { NotificationManagementService } from './notificationManagement.service';

const updateNotificationManagement = catchAsync(async (req, res) => {
  const result =
    await NotificationManagementService.updateNotificationManagement(req.body);
  sendResponse(res, {
    statusCode: StatusCodes.CREATED,
    success: true,
    message: 'Notification Management updated successfully',
    data: result,
  });
});

export const NotificationManagementController = {
  updateNotificationManagement,
};
