import React from 'react';
import styles from './Auth.module.scss';
import {NavLink} from "react-router-dom";

function Auth() {
    return (
        <div className={styles.wrapper}>
            <img src="./authBgImg.png" alt="bgImg"/>

            <div className={styles.formWrapper}>
                <form>
                    <NavLink to={'/'}>react recipes</NavLink>

                    <h1>Sign in or create an account</h1>

                    <div>
                        <label id='email' htmlFor="text">Email address</label>
                        <input type="email" id='email'/>
                    </div>

                    <div>
                        <label id='email' htmlFor="password">Password</label>
                        <input type="password" id='password'/>
                    </div>

                    <div className={styles.buttons}>
                        <button>Sign In</button>
                        <button>Sign Up</button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default Auth;