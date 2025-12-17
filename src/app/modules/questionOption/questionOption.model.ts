import { model, Schema } from 'mongoose';
import { IQuestionOption } from './questionOption.interface';

const questionOptionSchema = new Schema<IQuestionOption>(
  {
    questionId: {
      type: Schema.Types.ObjectId,
      ref: 'Question',
      required: true,
    },
    option: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

export const QuestionOption = model<IQuestionOption>(
  'QuestionOption',
  questionOptionSchema
);
