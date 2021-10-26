// import firebase from './firebase'
import { FirebaseApp, initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getDatabase } from "firebase/database";
const firebaseConfig = {
    
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
