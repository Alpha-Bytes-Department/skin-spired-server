import { model, Schema } from 'mongoose';
import { INotificationManagement } from './notificationManagement.interface';

const notificationManagementSchema = new Schema<INotificationManagement>(
  {
    inAppNotification: { type: Boolean, required: false, default: true },
    pushNotification: { type: Boolean, required: false, default: true },
  },
  {
    timestamps: true,
  },
);

export const NotificationManagement = model<INotificationManagement>(
  'NotificationManagement',
  notificationManagementSchema,
);
