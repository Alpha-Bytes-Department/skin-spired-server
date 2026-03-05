import { ILinkInfo } from './link_info.interface';
import { LinkInfo } from './link_info.model';

const createLinkInfo = async (data: ILinkInfo) => {
  const linkInfo = await LinkInfo.create(data);
  return linkInfo;
};

export const LinkInfoService = {
  createLinkInfo,
};
