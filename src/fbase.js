import firebase from "firebase/compat/app";
import {getAuth} from "firebase/auth";

import { initializeApp } from "firebase/app";
const firebaseConfig = {
    apiKey: "AIzaSyDb5RPP2l3IVd-m_uqhk6YoSHCvZmZFydM",
    authDomain: "nwitter-42050.firebaseapp.com",
    projectId: "nwitter-42050",
    storageBucket: "nwitter-42050.appspot.com",
    messagingSenderId: "499411114489",
    appId: "1:499411114489:web:28cc81185079b50f4fc528"
  };
const firebaseApp= firebase.initializeApp(firebaseConfig);
export const authService=getAuth(firebaseApp);