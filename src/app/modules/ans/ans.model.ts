import { model, Schema } from 'mongoose';
import { IAns } from './ans.interface';

const ansSchema = new Schema<IAns>(
  {
    questionId: {
      type: Schema.Types.ObjectId,
      ref: 'Question',
      required: true,
    },
    ans: { type: String, required: true },
    userId: { type: Schema.Types.ObjectId, ref: 'User', required: true },
  },
  {
    timestamps: true,
  }
);

export const Ans = model<IAns>('Ans', ansSchema);
