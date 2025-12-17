import { Types } from 'mongoose';

export type IQuestionOption = {
  questionId: Types.ObjectId;
  option: string;
};
