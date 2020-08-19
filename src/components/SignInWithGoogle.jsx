import React from 'react'
import { signInWithGoogle , auth} from '../firebase/firebase.utils'

function SignInWithGoogle() {
   
    
   
    const handleClick = async () =>{
    const result = await signInWithGoogle()
       
    }
   
    const handleClick2 = async () =>{
        auth.signOut()
           
        }
    return (
        <div>
            <button onClick = {() => handleClick()}>SignIn</button>
            <button onClick = {() => handleClick2()}>SignOut</button>
        </div>
    )
}

export default SignInWithGoogle
