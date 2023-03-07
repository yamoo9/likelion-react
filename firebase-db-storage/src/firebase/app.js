import { initializeApp } from 'firebase/app';

// const {
//   VITE_API_KEY,
//   VITE_AUTH_DOMAIN,
//   VITE_PROJECT_ID,
//   VITE_MESSAGE_SENDER_ID,
//   VITE_STORAGE_BUCKET,
//   VITE_APP_ID,
// } = import.meta.env;

// const firebaseConfig = {
//   apiKey: VITE_API_KEY,
//   authDomain: VITE_AUTH_DOMAIN,
//   projectId: VITE_PROJECT_ID,
//   storageBucket: VITE_STORAGE_BUCKET,
//   messagingSenderId: VITE_MESSAGE_SENDER_ID,
//   appId: VITE_APP_ID,
// };

const firebaseConfig = {
  apiKey: 'AIzaSyCL4Rt0HXA-atO8riWJ7vQtsToHGQ-76Sk',
  authDomain: 'yamoo9-firebase.firebaseapp.com',
  projectId: 'yamoo9-firebase',
  storageBucket: 'yamoo9-firebase.appspot.com',
  messagingSenderId: '425358474331',
  appId: '1:425358474331:web:20be14942fbfecf4ea137e',
};

export const app = initializeApp(firebaseConfig);
