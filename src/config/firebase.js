
import { initializeApp } from "firebase/app";
import {getAuth , GoogleAuthProvider} from 'firebase/auth';


const firebaseConfig = {
  apiKey: "AIzaSyA0X-5s6JuqnrzmKu-RSBN1t0dnnWDJHDQ",
  authDomain: "schoolio-5d98d.firebaseapp.com",
  projectId: "schoolio-5d98d",
  storageBucket: "schoolio-5d98d.appspot.com",
  messagingSenderId: "159776557871",
  appId: "1:159776557871:web:a279467d33196be38c6fda"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// configure firebase authentication
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();
