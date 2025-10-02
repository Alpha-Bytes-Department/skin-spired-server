import { model, Schema } from 'mongoose';
import { IAddRoutine } from './addRoutine.interface';

const routeSchema = new Schema<IAddRoutine>(
  {
    category: { type: String, required: true },
    endDate: { type: Date, required: true },
    startDate: { type: Date, required: true },
    morningOrder: { type: Number, required: true },
    morningTimeOfDay: [{ type: String, required: true }],
    eveningOrder: { type: Number, required: false },
    eveningTimeOfDay: [{ type: String, required: false }],
    product: { type: Schema.Types.ObjectId, ref: 'Product', required: true },
    user: { type: Schema.Types.ObjectId, ref: 'User', required: true },
    additionalIntroduction: { type: String, required: false },
    status: {
      type: String,
      required: true,
      default: 'pending',
      enum: ['pending', 'completed'],
    },
    msgStatus: {
      type: String,
      required: false,
      enum: ['pending', 'completed'],
    },
  },
  {
    timestamps: true,
  }
);

export const AddRoutine = model<IAddRoutine>('AddRoutine', routeSchema);
