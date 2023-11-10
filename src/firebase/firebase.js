// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC8gfDAAww3Cd5FWi6QdF5mWK1QGjTZAHk",
  authDomain: "canadream-837ef.firebaseapp.com",
  databaseURL: "https://krndsh-aa3d1.firebaseio.com",
  projectId: "canadream-837ef",
  storageBucket: "canadream-837ef.appspot.com",
  messagingSenderId: "1023414880592",
  appId: "1:1023414880592:web:7d44c1135c2cb67f48c455",
  measurementId: "G-NE8J34LMJ3"
};

// const firebaseConfig = {
//   apiKey: "AIzaSyC8gfDAAww3Cd5FWi6QdF5mWK1QGjTZAHk",
//   authDomain: "canadream-837ef.firebaseapp.com",
//   projectId: "canadream-837ef",
//   storageBucket: "canadream-837ef.appspot.com",
//   messagingSenderId: "1023414880592",
//   appId: "1:1023414880592:web:7d44c1135c2cb67f48c455"
// };

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const db = getFirestore(app);
