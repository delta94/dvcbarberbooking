import { getSDK } from '@services/graphql-client';

export const singleUploadApi = async (file: File) => {
  return getSDK().singleUpload({
    file,
  });
};
