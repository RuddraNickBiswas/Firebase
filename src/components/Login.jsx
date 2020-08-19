import React from 'react'
import * as Yup from 'yup'

import Form from './form/Form'
import FromInput from './form/FromInput'
import SubmitButton from './form/SubmitButton'
import firebase from '../firebase/firebase.utils'



function Login() {

    const shopRef  = firebase.database().ref("Shop/c1") 
    const setShop = () => {
        shopRef.child("c1").push().set([
            
            
            {
            id : 201,
            title :"Red Jacket",
            images: [
                {
                    url: 'https://www.surfstitch.com/on/demandware.static/-/Sites-ss-master-catalog/default/dw4dc4a423/images/NF0A3XCD15Q/FIERY-RED-MENS-CLOTHING-THE-NORTH-FACE-JACKETS-NF0A3XCD15Q_1.JPG',
                    thumbnailUrl:'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQHlGOyG5d6zEkGiiaKzCs5Vyn2_tOC_tnGhg&usqp=CAU'
                }
            ],
            price:100,
            categoryId: 5,
            userID:1,
            location:{
                latitude:"37.778825",
                longtitude: "--122.4324"
            }
        },
        {
            id : 222,
            title :"Gray couch in a great contidion",
            images: [
                {
                    url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQgi6cD4e0vAUhjWES57XyXn2pHMf27c0F35w&usqp=CAU',
                    thumbnailUrl:'https://curatedinterior.com/wp-content/uploads/2019/01/Modern-Light-Gray-Velvet-Sofa.jpg'
                }
            ],
            price:1000,
            categoryId: 5,
            userID:3,
            location:{
                latitude:"37.778825",
                longtitude: "--122.4324"
            }
        },
        {
            id : 244,
            title :"Sun Glass",
            images: [
                {
                    url: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.theweek.in%2Fwebworld%2Ffeatures%2Flifestyle%2Fmen-showing-greater-interest-in-their-appearance.html&psig=AOvVaw0ab_-agJXs8NUpJaavQtBq&ust=1597861710481000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCNjq6_2wpesCFQAAAAAdAAAAABAc',
                    thumbnailUrl:'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.theweek.in%2Fwebworld%2Ffeatures%2Flifestyle%2Fmen-showing-greater-interest-in-their-appearance.html&psig=AOvVaw0ab_-agJXs8NUpJaavQtBq&ust=1597861710481000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCNjq6_2wpesCFQAAAAAdAAAAABAc'
                }
            ],
            price:20,
            categoryId: 5,
            userID:1,
            location:{
                latitude:"37.778825",
                longtitude: "--122.4324"
            }
        },
    
        
    
    
    ])
       
    } 


    const validationSchema = Yup.object().shape({
        email : Yup.string().required().email().label("Name"),
        password: Yup.string().required().label('Password')
    })

    // firebase realtime database
    const onButtonClick = async () => {
        const asd = await shopRef.on('child_added', snap => {
           console.log(snap.val())
        } )
        console.log(asd)
       // setShop()
   }

    const handleSubmit = async values => {
        const signedInUser = await firebase.auth().signInWithEmailAndPassword(values.email , values.password)
        console.log(signedInUser)
    }

   
  

    return (
        <>
        <Form 
        initialValues ={{email: '' , password : ''}}
        onSubmit ={values =>  handleSubmit(values)}
        validationSchema ={validationSchema}
        >
            <FromInput 
                type='text'
                width= '500px'
                name= 'email'
                placeholder= "Email"
            />
             <FromInput 
                type='password'
                width= '500px'
                name= 'password'
                placeholder ="password"
            />
            <SubmitButton  />
        </Form>

        <button onClick = {() => onButtonClick()}>thiis is it</button>
        </>
    )
}

export default Login
