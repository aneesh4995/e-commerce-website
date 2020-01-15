import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';


const config = {
    apiKey: "AIzaSyCleI9SbVsEJXZsvJuhMnw-vlKrBvJtaI8",
    authDomain: "clothing-website-be045.firebaseapp.com",
    databaseURL: "https://clothing-website-be045.firebaseio.com",
    projectId: "clothing-website-be045",
    storageBucket: "clothing-website-be045.appspot.com",
    messagingSenderId: "149820716973",
    appId: "1:149820716973:web:f5f824da16e39ceaea9324",
    measurementId: "G-3DC6RLY2VK"
  };
//firebase.initializeApp(config);

  export const createUserProfileDocument = async (userAuth, additionalData) => {
    if(!userAuth) return;
    
    const userRef = firestore.doc(`users/${userAuth.uid}`)

    const snapShot = await userRef.get();

    if (!snapShot.exists){
      const { displayName, email } = userAuth;
      const createdAt = new Date();

      try{
        await userRef.set({
          displayName,
          email,
          createdAt,
          ...additionalData
        })
      } catch (error) {
        console.log('error creating user', error.message);
      }
    }

    return userRef
  };


  firebase.initializeApp(config)

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({ prompt: 'select_account' });
  export const signInWithGoogle = () => auth.signInWithPopup(provider);


  export default firebase;
  


