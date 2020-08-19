import React from 'react'
import FromInput from './form/FromInput'
import Form from './form/Form'
import * as Yup from 'yup'
import md5 from 'md5'
import firebase, { createUserProfileDocument } from '../firebase/firebase.utils'
import SubmitButton from './form/SubmitButton';
function Register() {
  
    
    const validationSchema = Yup.object().shape({
        name: Yup.string().required().label("Name"),
        email: Yup.string().required().email().label("Email"),
        password: Yup.string().required().min(6).label("Password"),
        confirmPassword: Yup.string().oneOf(
            [Yup.ref('password'), null] , "'Passwords must match'"
        )
      });
  
      

     const handleSubmit = async (values) => {
         try {
             const {user} = await firebase.auth()
             .createUserWithEmailAndPassword(values.email, values.password)
            await user.updateProfile({
                 displayName: values.name,
                 photoURL: `http://gravatar.com/avatar/${md5(user.email)}?d=identicon`
             })
             createUserProfileDocument(user ,{displayName :values.name} )
             console.log("user Saved")
             
         } catch (error) {
             console.log(error)
         }
     } 

    
    
    return (
        <>
        <Form
        initialValues= {{name: '' , email: "" , password: "", confirmPassword : ''}}
        onSubmit={(values) => handleSubmit(values)}
        validationSchema={validationSchema}
        >
            <FromInput 
            type='text'
            name = 'name'
            width = "500px"
            placeholder='Name'
            />

            <FromInput 
            type='text'
            name = 'email'
            width = "500px"
            placeholder='Email'
            />
            <FromInput 
            type='password'
            name = 'password'
            width = "500px"
            placeholder='Password'
            />
             <FromInput 
            type='password'
            name = 'confirmPassword'
            width = "500px"
            placeholder='Confirm Password'
            />
           <SubmitButton />
        </Form>
       </>
    )
}

export default Register
