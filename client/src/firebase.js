// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: 'mern-estate-144ae.firebaseapp.com',
  projectId: 'mern-estate-144ae',
  storageBucket: 'mern-estate-144ae.appspot.com',
  messagingSenderId: '568172737669',
  appId: '1:568172737669:web:04f5691e94de577c44e5ec',
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
