// import firebase from './firebase'
import { FirebaseApp, initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getDatabase } from "firebase/database";
const firebaseConfig = {
    apiKey: "AIzaSyDX9Dy6kPMtw0Sr4KpbQN3V45dV-HGbouI",
    authDomain: "linkedin-clone-dae89.firebaseapp.com",
    projectId: "linkedin-clone-dae89",
    storageBucket: "linkedin-clone-dae89.appspot.com",
    messagingSenderId: "724327000087",
    appId: "1:724327000087:web:d3a61882de333cf626d452"
  };
  const app: FirebaseApp = initializeApp(firebaseConfig);

  const db = getDatabase(app);
  
  const auth = getAuth(app);

  const firebase = app;
  // const firebaseApp = firebase.initializeApp(firebaseConfig);

  // const db = firebaseApp.firestore();
  // const auth = firebase.auth();

  export { db, auth }
  export default firebase;