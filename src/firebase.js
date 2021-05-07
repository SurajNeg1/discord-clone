// For Firebase JS SDK v7.20.0 and later, measurementId is optional

import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyAz_TpIPWg9htfcCVvBjz1mILhQKQUfcT4",
    authDomain: "discord-clone-5df28.firebaseapp.com",
    projectId: "discord-clone-5df28",
    storageBucket: "discord-clone-5df28.appspot.com",
    messagingSenderId: "964515685092",
    appId: "1:964515685092:web:883ac7e8c215d4722f82f1",
    measurementId: "G-J6XSW0185S"
};

const firebaseApp  = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth(); 

const provider = new firebase.auth.GoogleAuthProvider();


export { auth , provider};
export default db;
