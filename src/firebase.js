import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth} from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCptx2rVC70XSEeH--Nt6bwOnYjq0Qc73c",
  authDomain: "chatapp-d494a.firebaseapp.com",
  projectId: "chatapp-d494a",
  storageBucket: "chatapp-d494a.firebasestorage.app",
  messagingSenderId: "798826592422",
  appId: "1:798826592422:web:6edfab05e70dfccc6e5c67",
  measurementId: "G-M8JR2LDNHN",
  
};

export const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);
export const auth=getAuth();
export const storage=getStorage();
export const db=getFirestore();
