import { model, Schema } from 'mongoose';
import { ILinkInfo } from './link_info.interface';

const link_infoSchema = new Schema<ILinkInfo>(
  {
    link: { type: [String], required: true },
  },
  {
    timestamps: true,
  },
);

export const LinkInfo = model<ILinkInfo>('LinkInfo', link_infoSchema);
