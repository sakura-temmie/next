import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCB742vkP48SNxui1Ggqh3KboR0lRyGzno",
  authDomain: "test-6e4fb.firebaseapp.com",
  databaseURL: "https://test-6e4fb.firebaseio.com",
  projectId: "test-6e4fb",
  storageBucket: "test-6e4fb.appspot.com",
  messagingSenderId: "753661040163",
  appId: "1:753661040163:web:e40f70f7dc0147dc44c396",
  measurementId: "G-L9K9TWFLLW",
};
initializeApp(firebaseConfig);

export const app = initializeApp(firebaseConfig);
export const db = getFirestore();
