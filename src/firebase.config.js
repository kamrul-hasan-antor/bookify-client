import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyD3hW-iAAxX6iY0RW2MTmtphqACznNk2mo",
  authDomain: "bookify-ce1d5.firebaseapp.com",
  projectId: "bookify-ce1d5",
  storageBucket: "bookify-ce1d5.appspot.com",
  messagingSenderId: "225283885527",
  appId: "1:225283885527:web:c187494b84926857a76392",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;
