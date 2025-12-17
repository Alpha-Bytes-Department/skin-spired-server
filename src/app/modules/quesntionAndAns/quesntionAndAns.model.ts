import { model, Schema } from 'mongoose';
import { IQuestionAndAns } from './quesntionAndAns.interface';

const quesntionAndAnsSchema = new Schema<IQuestionAndAns>(
  {
    question: { type: String, required: true },
    isVisible: { type: Boolean, default: true },
    option: { type: [String], required: true },
  },
  {
    timestamps: true,
  }
);

export const QuestionAndAns = model<IQuestionAndAns>(
  'Question',
  quesntionAndAnsSchema
);
