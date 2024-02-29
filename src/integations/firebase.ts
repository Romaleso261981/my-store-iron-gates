import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

export const firebaseConfig = {
  apiKey: 'AIzaSyA0AdoQoblJrm_a9Qbh628U-Yt2-6DEKHQ',
  authDomain: 'new-spa-b84ea.firebaseapp.com',
  databaseURL: 'https://new-spa-b84ea-default-rtdb.firebaseio.com',
  projectId: 'new-spa-b84ea',
  storageBucket: 'yourstoragebucket.appspot.com',
  messagingSenderId: '326537037114',
  appId: '1:326537037114:web:7b126f6bf625fe0b7dfc03'
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

export const db = getFirestore(app);
