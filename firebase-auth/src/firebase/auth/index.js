import { getAuth } from 'firebase/auth';
import { app } from '../app';

export const auth = getAuth(app);
auth.useDeviceLanguage();

export * from './useSignUp';
export * from './useSignIn';
export * from './useSignOut';
export * from './useAuthState';
