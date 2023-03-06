import { initializeApp } from 'firebase/app';

const {
  VITE_API_KEY,
  VITE_AUTH_DOMAIN,
  VITE_PROJECT_ID,
  VITE_MESSAGE_SENDER_ID,
  VITE_STORAGE_BUCKET,
  VITE_APP_ID,
} = import.meta.env;

const firebaseConfig = {
  apiKey: VITE_API_KEY,
  authDomain: VITE_AUTH_DOMAIN,
  projectId: VITE_PROJECT_ID,
  storageBucket: VITE_STORAGE_BUCKET,
  messagingSenderId: VITE_MESSAGE_SENDER_ID,
  appId: VITE_APP_ID,
};

export const app = initializeApp(firebaseConfig);
