// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyAk_2ULIMlSwflSHc4JTEo8RRIuRiPePAg",
  authDomain: "zenden-upload.firebaseapp.com",
  projectId: "zenden-upload",
  storageBucket: "zenden-upload.appspot.com",
  messagingSenderId: "469980323091",
  appId: "1:469980323091:web:75089cfc0497a47c354ee6",
};

const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);
