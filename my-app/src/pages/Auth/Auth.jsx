import React, {useState} from 'react';
import styles from './Auth.module.scss';
import {NavLink} from "react-router-dom";
import {firebaseAPI} from "../../services/firebase/api";
import {ToastContainer} from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';


function Auth() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    function handleChange(e) {
        const {type, value} = e.target;

        if (type === 'email') {
            setEmail(value)
        } else if (type === 'password') {
            setPassword(value)
        }
    }

    async function handleSignIn(e) {
        e.preventDefault()
         await firebaseAPI.signInUser(email, password)
    }

    async function handleSignUp(e) {
        e.preventDefault()
        await firebaseAPI.signUpUser(email, password)
    }

    return (
        <div className={styles.wrapper}>
            <ToastContainer
                position="top-center"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="light"
            />

            <img src="/authBgImg.png" alt="bgImg"/>

            <div className={styles.formWrapper}>
                <form>
                    <NavLink to={'/'}>react recipes</NavLink>

                    <h1>Sign in or create an account</h1>

                    <div>
                        <label id='email' htmlFor="text">Email address</label>
                        <input value={email} onChange={handleChange} type="email" id='email'/>
                    </div>

                    <div>
                        <label id='password' htmlFor="password">Password</label>
                        <input value={password} onChange={handleChange} type="password" id='password'/>
                    </div>

                    <div className={styles.buttons}>
                        <button onClick={handleSignIn}>Sign In</button>
                        <button onClick={handleSignUp}>Sign Up</button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default Auth;