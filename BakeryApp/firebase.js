// Import the functions you need from the SDKs you need
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAHWuFwH48fzIMWoIuU-GsqSgAfE5dWQAw",
  authDomain: "data-tiembanh.firebaseapp.com",
  projectId: "data-tiembanh",
  storageBucket: "data-tiembanh.appspot.com",
  messagingSenderId: "561784725633",
  appId: "1:561784725633:web:03a0066a7ce5fe1da26d80"
};

// Initialize Firebase
const firebaseApp =firebase.initializeApp(firebaseConfig);

// Use these for db & auth
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { auth, db };