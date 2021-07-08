import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';


const config = {
    apiKey: "AIzaSyBZ6SO24vg1zpRJyNhWtkoEq-AmqKcdEss",
    authDomain: "crwn-db-e5373.firebaseapp.com",
    projectId: "crwn-db-e5373",
    storageBucket: "crwn-db-e5373.appspot.com",
    messagingSenderId: "959299823251",
    appId: "1:959299823251:web:3b36b0a6d762dec735cf66",
    measurementId: "G-P7TXM30EXW"
  };

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();


const provider = new firebase.auth.GoogleAuthProvider();

provider.setCustomParameters({ prompt: 'select_account'});

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;

