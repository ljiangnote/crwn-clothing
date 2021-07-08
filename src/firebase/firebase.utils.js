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

export const createUserProfileDocument = async (userAuth, additionalData) => {
    
    if(!userAuth) return;

    const userRef = firestore.doc(`users/${userAuth.uid}`);
    const snapShot = await userRef.get();

    if(!snapShot.exists){
        const { displayName, email } = userAuth;

        const createdAt = new Date();

        try {

            await userRef.set({
                displayName,
                email,
                createdAt,
                ...additionalData
            });
        }catch(error){
            console.log('error creating user', error.message);
        }
    }

    return userRef;

}

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();


const provider = new firebase.auth.GoogleAuthProvider();

provider.setCustomParameters({ prompt: 'select_account'});

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;

