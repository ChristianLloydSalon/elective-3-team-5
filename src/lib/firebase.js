import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyChuI-z37iVOgyIfDuwYeDBIj2MDWVy7nw",
  authDomain: "social-media-test-2edbf.firebaseapp.com",
  projectId: "social-media-test-2edbf",
  storageBucket: "social-media-test-2edbf.appspot.com",
  messagingSenderId: "188091723117",
  appId: "1:188091723117:web:2b2988c9b2b098677b7e64",
};

export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
export const storage = getStorage(app);
