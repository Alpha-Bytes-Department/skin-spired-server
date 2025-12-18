import { Types } from 'mongoose';

export type IAns = {
  questionId: Types.ObjectId;
  ans: string[];
  userId: Types.ObjectId;
};
