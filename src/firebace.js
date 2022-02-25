import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDvjDfbNfSnoLqLayBSQUIR1yKVU94TBrI",
  authDomain: "next-test-3c737.firebaseapp.com",
  databaseURL: "https://next-test-3c737.firebaseio.com",
  projectId: "next-test-3c737",
  storageBucket: "next-test-3c737.appspot.com",
  messagingSenderId: "798072738034",
  appId: "1:798072738034:web:f15f4560d9d4eccf65806b",
  measurementId: "G-S43FBST19S",
};
initializeApp(firebaseConfig);

export const app = initializeApp(firebaseConfig);
export const db = getFirestore();
