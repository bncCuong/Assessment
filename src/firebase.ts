// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyCSvlg0VToIfLzCUc8IGgtYUs1XhQoZJpM',
  authDomain: 'assessment-94cdb.firebaseapp.com',
  projectId: 'assessment-94cdb',
  storageBucket: 'assessment-94cdb.appspot.com',
  messagingSenderId: '326306116484',
  appId: '1:326306116484:web:5186a964a18ae43167e3d1',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth();
