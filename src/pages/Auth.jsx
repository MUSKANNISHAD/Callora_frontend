// import React from 'react';
// import { useState, useEffect } from 'react';
// import styles from "./Auth.module.css";
// import { AuthContext } from '../Contexts/AuthContext.jsx';
// import { useContext } from 'react';
// import { Toaster } from "react-hot-toast";
// import TextField from "@mui/material/TextField";
// import Button from '@mui/material/Button';
// import { useNavigate } from 'react-router-dom';


// export default function Auth() {

//     // const router = useNavigate();
//     // const { isSignup, setIsSignup } = useContext(AuthContext);

//     // const { username, setUserName } = useContext(MyContext);
//     // const { password, setPassword } = useContext(MyContext);
//     // const { email, setEmail } = useContext(MyContext);
//     // const { isLogintrue, setIsLoginTrue } = useContext(MyContext);
//     // console.log("is login is :", isLogintrue);


//     const { handleRegister } = useContext(AuthContext);
//     const { handleLogin } = useContext(AuthContext);

    
    
//     // useEffect(() => {
//     //     if (localStorage.getItem("token")) {
//     //         console.log("is user logged in ", setIsLoginTrue);     1st change
//     //         router("/:url");
//     //     }
//     // }, [])

//     // useEffect(() => {
//     //     if (localStorage.getItem('token') === null) {
//     //         router("/auth");
//     //     }
//     // })
//     // { console.log("message is", message) }


//     return (
//         <>
//             {/* <Toaster position="top-center" /> */}
//             <div className={styles.authContainer}>
//                 <Toaster position="top-right" />
//                 <div className={styles.authcard}>
//                     <div className={styles.logo}>
//                         Callora
//                     </div>
//                     <h1>
//                         {isSignup ? "Create your account" : "Welcome back"}
//                     </h1>
//                     <p className={styles.subtitle}>
//                         {isSignup
//                             ? "Join Callora and get started today."
//                             : "Login to continue to Callora."
//                         }
//                     </p>

//                     <div className={styles.form}  >
//                         {isSignup && (
//                             <TextField
//                                 onChange={(e) => setUserName(e.target.value)}
//                                 fullWidth
//                                 label="Username"
//                                 type="text"
//                                 variant="outlined"
//                                 margin="normal"
//                                 className={styles.formControl}
//                             />
//                         )}

//                         <TextField
//                             onChange={(e) => setEmail(e.target.value)}
//                             fullWidth
//                             label="email"
//                             type="email"
//                             variant="outlined"
//                             margin="normal"
//                             className={styles.formControl}
//                         />

//                         <TextField
//                             onChange={(e) => setPassword(e.target.value)}
//                             fullWidth
//                             label="Password"
//                             type="password"
//                             variant="outlined"
//                             margin="normal"
//                             className={styles.formControl}
//                         />
//                         {
//                             isSignup ?
//                                 <Button onClick={
//                                     handleRegister
//                                 } className={styles.authBtn}
//                                     variant="contained">Create Account
//                                 </Button> :
//                                 <Button onClick={
//                                     handleLogin
//                                 }
//                                     className={styles.authBtn}
//                                     variant="contained">Sign In
//                                 </Button>
//                         }
//                     </div>
//                     <p
//                         className={styles.toggleText}
//                         onClick={() => setIsSignup(!isSignup)}
//                     >
//                         {isSignup
//                             ? "Already have an account? "
//                             : "Don't have an account? "
//                         }
//                         <span>
//                             {isSignup ? "Login" : "Sign Up"}
//                         </span>
//                     </p>
//                 </div>
//             </div >
//         </>
//     );
// }