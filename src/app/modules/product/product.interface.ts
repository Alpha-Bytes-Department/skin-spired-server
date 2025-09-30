import { Types } from 'mongoose';

export type IProduct = {
  productName: string;
  ingredients: string;
  image: string[];
  howToUse: string[];
  skinCondition: Types.ObjectId;
  note: string;
  description: string;
};

export type UpdateProductPayload = Partial<IProduct> & {
  imagesToDelete?: string[];
};
