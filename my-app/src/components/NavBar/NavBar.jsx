import React from 'react';
import styles from './NavBar.module.scss';
import {NavLink} from "react-router-dom";
import BurgerMenu from "../BurgerMenu/BurgerMenu";
import SearchButton from "./components/SearchButton/SearchButton";


function NavBar() {
    return  <div className={styles.navBar}>
            <BurgerMenu/>

            <div className={styles.logoBlock}>
                   <span className={styles.logoText}>
                     <NavLink to='/'>react recipes</NavLink>
                   </span>
            </div>

            <div className={styles.followBlock}>
                <span>Follow</span>
                <a href={'https://github.com/romangoduhin'} target="_blank" rel="noreferrer">
                    <img src="/githubIcon.png" alt="icon"/>
                </a>

                <a href={'https://www.linkedin.com/in/romangoduhin/'} target="_blank" rel="noreferrer">
                    <img src="/linkedinIcon.png" alt="icon"/>
                </a>
            </div>

            <SearchButton/>
        </div>
}

export default NavBar;