import React from 'react';
import styles from './NavBar.module.scss';
import {NavLink} from "react-router-dom";


function NavBar() {
    return (
        <div className={styles.navBar}>
            <div className={styles.burgerMenu}>
                <img src="/burgerIcon.svg" alt="icon"/>
            </div>

            <div className={styles.logoBlock}>
                   <span className={styles.logoText}>
                     <NavLink to='/'>simply recipes</NavLink>
                   </span>
            </div>

            <div className={styles.followBlock}>
                <span>Follow</span>
                <a href={'https://github.com/romangoduhin'} target="_blank">
                        <img src="/githubIcon.png" alt="icon"/>
                </a>

                <a href={'https://www.linkedin.com/in/romangoduhin/'} target="_blank">
                    <img src="/linkedinIcon.png" alt="icon"/>
                </a>
            </div>

            <div className={styles.searchBlock}>
                <span>Search</span>
                <img src="/searchIcon.svg" alt="icon"/>
            </div>
        </div>
    );
}

export default NavBar;