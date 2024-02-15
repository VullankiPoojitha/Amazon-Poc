import React, { useState } from 'react';
import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth';
import { auth } from '../../firebase';
import { useNavigate } from 'react-router-dom';
import '../styles/signInStyles.css';

const SignUpFunction = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [userName, setUserName] = useState("");
    const Navigate = useNavigate();

    const displayName = userName
    const signUp = (e) => {
        e.preventDefault();
        createUserWithEmailAndPassword(auth, email, password, displayName)
            .then((userCredential) => {
                console.log(userCredential.user)
                const user = userCredential.user
                updateProfile(user, {
                    displayName: userName
                })
            })
            .catch((error) => {
                console.log(error)
            })
    }

    const handleLogin = () => {
        Navigate('/SignIn')
        


    }
    return (
        <div className='mainContaier'>
            <div> <img src="https://1000logos.net/wp-content/uploads/2016/10/Amazon-Logo.png" alt='' width={200} height={200} /></div>

            <form onSubmit={signUp} className='formStyles'>
                <div className='headingStyles'>Create Account</div>
                {/* <div style={{ padding: '15px 15px 15px 0px' }}>
                    <button onClick={() => { handleLogin() }} style={{ border: 'none', background: 'transparent', fontSize: '20px' }}>Login</button>
                </div> */}
                <div className='labelStyles'>UserName</div>
                <div className='inputContainer'>
                    <input type='text' placeholder='Please enter username' value={userName} onChange={(e) => { setUserName(e.target.value) }} className='inputStyles' />
                </div>
                <div className='labelStyles'>Email</div>

                <div className='inputContainer'>
                    <input type='email' placeholder='Enter your email' value={email} onChange={(e) => { setEmail(e.target.value) }} className='inputStyles' />
                </div>
                <div className='labelStyles'>Password</div>

                <div className='inputContainer'>
                    <input type='password' placeholder='Enter your password' value={password} onChange={(e) => setPassword(e.target.value)} className='inputStyles' />
                </div>
                <div className='buttonContainer'>

                    <button type='submit' className='buttonStyles'>Create your Amazon account </button>
                </div>
                <div className='linkContainer' >By continuing, you agree to Amazon's <a href="" className='aColor'>Conditions of Use</a> and <a href="" className='aColor'>Privacy Notice.</a></div>
                <hr></hr>
                <div className='textNewAmazonStyles'>Already have an account?
                    <button onClick={() => { handleLogin() }} style={{
                        border: 'none', background: 'transparent', fontSize: '13px',
                        lineHeight: '19px',
                        color: '#0066c0',
                        fontFamily: 'Arial,sans-serif',

                    }}>Login</button>
                </div>
            </form >
        </div >
    )
}

export default SignUpFunction

// import React from "react";
// import { Formik, Form, Field, ErrorMessage } from "formik";
// import * as Yup from "yup";
// import { signInWithEmailAndPassword } from 'firebase/auth';
// import { auth } from '../../firebase';
// import { useNavigate } from 'react-router-dom';

// import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth';


// function SignUpFunction() {
//     const validationSchema = Yup.object().shape({
//         userName: Yup.string().required("Fullname is required"),
//         email: Yup.string().email("Invalid email").required("Email is required"),
//         password: Yup.string().required("Password is required"),
//     });


//     const signUp = (values) => {

//         const displayName = values.userName;

//         createUserWithEmailAndPassword(auth, values.email, values.password, displayName)
//             .then((userCredential) => {
//                 console.log(userCredential.user)
//                 const user = userCredential.user
//                 updateProfile(user, {
//                     displayName: values.userName
//                 })
//             })
//             .catch((error) => {
//                 console.log(error)
//             })
//     }

//     return (
//         <div className="App" style={{ textAlign: "center" }}>
//             <h1>Register a new account</h1>
//             <Formik
//                 initialValues={{ fullname: "", email: "", password: "" }}
//                 validationSchema={validationSchema}
//                 onSubmit={(values, formikProps) => {

//                     console.log(values,formikProps, 'values123'); // Log submitted data to console
//                     signUp(values,validationSchema)
//                 }}
//             >

//                 <Form>
//                     <Field
//                         type="text"
//                         name="userName"
//                         placeholder="Enter your userName"
//                     />
//                     <ErrorMessage name="userName" component="div" style={{color:'red'}}/>

//                     <Field
//                         type="email"
//                         name="email"
//                         placeholder="Enter email address"
//                     />
//                     <ErrorMessage name="email" component="div" />

//                     <Field type="password" name="password" />
//                     <ErrorMessage name="password" component="div" />

//                     <button type="submit" >
//                         Submit
//                     </button>
//                 </Form>
//             </Formik>
//         </div>
//     );
// }

// export default SignUpFunction;
