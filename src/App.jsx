import React, {useEffect, useState} from 'react';
import { Switch, Route } from 'react-router-dom';
import Login from './components/Login';
import Register from './components/Register';
import SignInWithGoogle from './components/SignInWithGoogle';

import furebase, { createUserProfileDocument } from './firebase/firebase.utils'


function App() {
  
  const [currentUser , setCurrentUser] = useState(null)

  
  useEffect(() => {
    let unsubscribeFromAuth = null;

    unsubscribeFromAuth = furebase
      .auth()
      .onAuthStateChanged(async (userAuth) => {
        if (userAuth) {
          const userRef = await createUserProfileDocument(userAuth);
          userRef.onSnapshot((snap) => {
            setCurrentUser({ id: snap.id, ...snap.data() });
            console.log(userAuth);
          });
          
        } else {
          setCurrentUser(userAuth);
        }
      });
    return () => { 
      unsubscribeFromAuth();
    };
    //disable eslinter
  }, []);
  

  return (
   <div className="">
     <Switch>
     <Route exact path ='/register' component={Register}/> 
       <Route exact path ='/login' component={Login}/> 
       <Route exact path ='/' component={SignInWithGoogle}/>
     </Switch>
   </div>
  );
}

export default App;
