import React, { useState } from 'react';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../firebase';
import { useNavigate } from 'react-router-dom';
import '../styles/signInStyles.css';

const SignInFunction = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const Navigate = useNavigate();
    const signIn = (e) => {
        e.preventDefault();
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                console.log(userCredential)

            })
            .catch((error) => {
                console.log(error)
            })
    }

    const handleSignUp = () => {
        Navigate('/')
    }

    const handleSignFunctionality = () => {
        Navigate('/home')

    }
    return (
        <div className='mainContaier'>

            <div> <img src="https://1000logos.net/wp-content/uploads/2016/10/Amazon-Logo.png" alt='' width={200} height={120} /></div>

            <form onSubmit={signIn} className='formStyles'>

                <div className='headingStyles'>Sign In</div>
                {/* <div style={{ textAlign: 'center', padding: '15px' }}>
                    <button onClick={() => { handleSignUp() }} style={{ border: 'none', background: 'transparent', fontSize: '20px', borderBottom: '1px solid black' }}>SignUp</button>
                </div > */}
                <div className='labelStyles' >Email</div>

                <div className='inputContainer'>
                    <div>
                        <input type='email' placeholder='Enter your email' value={email} onChange={(e) => { setEmail(e.target.value) }} className='inputStyles' />
                    </div>
                    {/* {!email && <div style={{ justifyContent:'end', color: 'red' }}>Email is Required</div>} */}
                </div>

                <div className='labelStyles'>Password</div>

                <div className='inputContainer'>

                    <input type='password' placeholder='Enter your password' value={password} onChange={(e) => setPassword(e.target.value)} className='inputStyles' />
                </div>
                <div className='buttonContainer'>
                    <button type='submit' onClick={() => { handleSignFunctionality() }} className='buttonStyles'>Sign In</button>
                </div>
                <div className='linkContainer'>By continuing, you agree to Amazon's <a href="" className='aColor'>Conditions of Use</a> and <a href="" className='aColor'>Privacy Notice.</a></div>
                <div className='textNewAmazonStyles'
                >New  to Amazon</div>
                <div className='signUpContainer'>
                    <button onClick={() => { handleSignUp() }} className='buttonStylesSignUp'>SignUp</button>
                </div >
            </form >
        </div >
    )
}

export default SignInFunction




// import React from "react";
// import { Formik, Form, Field, ErrorMessage } from "formik";
// import * as Yup from "yup";
// import { signInWithEmailAndPassword } from 'firebase/auth';
// import { auth } from '../../firebase';
// import { useNavigate } from 'react-router-dom';

// function SignInFunction() {
//     const validationSchema = Yup.object().shape({
//         // fullname: Yup.string().required("Fullname is required"),
//         email: Yup.string().email("Invalid email").required("Email is required"),
//         password: Yup.string().required("Password is required"),
//     });

//     const signIn = (value) => {
//         console.log(value.email, value.password)
//         // e.preventDefault();
//         signInWithEmailAndPassword(auth, value.email, value.password)
//             .then((userCredential) => {
//                 console.log(userCredential, 'userCredential')

//             })
//             .catch((error) => {
//                 console.log(error)
//             })
//     }

//     return (
//         <div className="App" style={{ textAlign: "center" }}>
//             <h1>Register a new account</h1>
//             <Formik
//                 initialValues={{ email: "", password: "" }}
//                 validationSchema={validationSchema}
//                 onSubmit={(values, formikProps) => {
//                     signIn(values)
//                     console.log(values,formikProps, 'values');

//                 }}
//             >

//                 <Form>


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

// export default SignInFunction;
