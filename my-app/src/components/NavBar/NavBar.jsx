import React from 'react';
import styles from './NavBar.module.scss';
import {NavLink} from "react-router-dom";

function NavBar() {
    return (
        <div className={styles.navBar}>
            <div className={styles.logoBlock}>
                <NavLink to='/'>
                    <img src="/logoBig.png" alt="logoImage"/>
                </NavLink>
            </div>

            <div className={styles.stick}/>

            <div className={styles.searchBlock}>
                <input
                    placeholder="Search recipes"
                    type="text"
                />
            </div>

            <div className={styles.profileBlock}>
                <div className={styles.logo}>
                    <img src="/userLogo.png" alt="user logo"/>
                </div>

                <div className={styles.auth}>
                    <button>Login</button>

                    <span> or </span>

                    <button>Sign up</button>
                </div>
            </div>
        </div>
    );
}

export default NavBar;