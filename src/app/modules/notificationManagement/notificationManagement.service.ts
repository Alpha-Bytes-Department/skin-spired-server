import { INotificationManagement } from './notificationManagement.interface';
import { NotificationManagement } from './notificationManagement.model';

const updateNotificationManagement = async (
  payload: INotificationManagement,
) => {
  const { inAppNotification, pushNotification } = payload;

  const result = await NotificationManagement.findOneAndUpdate(
    {},
    { $set: { inAppNotification, pushNotification } },
    { new: true, upsert: true },
  );

  return result;
};
export const NotificationManagementService = {
  updateNotificationManagement,
};
