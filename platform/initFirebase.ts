import { getApp, initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import {
  NEXT_PUBLIC_FIREBASE_API_KEY,
  NEXT_PUBLIC_FIREBASE_APP_ID,
  NEXT_PUBLIC_FIREBASE_MESSAGING_ID,
  NEXT_PUBLIC_FIREBASE_PROJECT_ID,
} from "configs";
import "firebase/compat/firestore";
import firebase from "firebase/compat/app";
import "firebase/compat/auth";

export const initFirebase = async (): Promise<void> => {
  await initializeApp({
    projectId: NEXT_PUBLIC_FIREBASE_PROJECT_ID,
    messagingSenderId: NEXT_PUBLIC_FIREBASE_MESSAGING_ID,
    apiKey: NEXT_PUBLIC_FIREBASE_API_KEY,
    appId: NEXT_PUBLIC_FIREBASE_APP_ID,
  });
};
const app = firebase.initializeApp({
  projectId: NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  messagingSenderId: NEXT_PUBLIC_FIREBASE_MESSAGING_ID,
  apiKey: NEXT_PUBLIC_FIREBASE_API_KEY,
  appId: NEXT_PUBLIC_FIREBASE_APP_ID,
});
export const auth = getAuth(app);
export const database = app.firestore();
