// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC99P3IJguuyzubSGGAqrNhnjaGlKIoXuM",
  authDomain: "franz-lariba.firebaseapp.com",
  projectId: "franz-lariba",
  storageBucket: "franz-lariba.appspot.com",
  messagingSenderId: "659122712579",
  appId: "1:659122712579:web:da42903354131ccd371e36",
  measurementId: "G-8T20ER8SKD"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);