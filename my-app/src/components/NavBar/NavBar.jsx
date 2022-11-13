import React from 'react';
import styles from './NavBar.module.scss';

function NavBar() {
    return (
        <div className={styles.navBar}>
            <div className={styles.logoBlock}>
                <img src="/logoBig.png" alt="logoImage"/>
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