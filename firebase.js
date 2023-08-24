// Import the functions you need from the SDKs you need
import { initializeApp } from "./node_modules/firebase/app";
import { getAnalytics } from "./node_modules/firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD1G3VvClv1UDR66AA_kkI67XYU8-kTFhk",
  authDomain: "newproject-b3d13.firebaseapp.com",
  projectId: "newproject-b3d13",
  storageBucket: "newproject-b3d13.appspot.com",
  messagingSenderId: "344539793720",
  appId: "1:344539793720:web:5989202bacb43eb76bd9cd",
  measurementId: "G-MW33MJ8MWY",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
