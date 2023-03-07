import { app } from '../app';
import { getStorage } from 'firebase/storage';

export const storage = getStorage(app);

export * from './useUploadFile';
export * from './useDownloadURL';
export * from './useDeleteFile';
