import firebase from "firebase/app"
import 'firebase/firestore'
import 'firebase/database'
import 'firebase/auth'


const firebaseConfig = {
  apiKey: "AIzaSyCOT8zOkPBpUJchyw4ZxC0A0zVlSh6KQkQ",
  authDomain: "rnb-mobileapp.firebaseapp.com",
  databaseURL: "https://rnb-mobileapp.firebaseio.com",
  projectId: "rnb-mobileapp",
  storageBucket: "rnb-mobileapp.appspot.com",
  messagingSenderId: "502581668728",
  appId: "1:502581668728:web:b6b8640fc231cebc11b68d",
  measurementId: "G-FTPYT0SV0L"
};
 
  

  firebase.initializeApp(firebaseConfig)
  


  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({
    'login_hint ' : 'user@example.com'
  })

  export const signInWithGoogle =() => auth.signInWithPopup(provider)


  export const createUserProfileDocument = async (userAuth, additionalData) => {

    if(!userAuth) return;


    const userRef = firestore.doc(`users/${userAuth.uid}`)
    const snapShot = await userRef.get()

    if(!snapShot.exists){
      const {displayName , email} = userAuth;
      const createdAt = new Date();

      try {
        await userRef.set({
          displayName,
          email,
          createdAt,
          ...additionalData,
        })
      } catch (error) {
        console.log(error)  
      }
    }
    
    return userRef;

  }

  export const auth = firebase.auth()
  export const firestore = firebase.firestore()
export const db = firebase.database()

export default firebase;