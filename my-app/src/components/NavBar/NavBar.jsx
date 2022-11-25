import React from 'react';
import styles from './NavBar.module.scss';
import {NavLink} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {setIsSearchOpen} from "../../redux/actions/appActions";


function NavBar() {
    const dispatch = useDispatch();

    const {isSearchOpen} = useSelector((state) => state.app);

    async function handleOpen() {
        dispatch(setIsSearchOpen(!isSearchOpen))
    }

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
                <img onClick={handleOpen} src="/searchIcon.svg" alt="icon"/>
            </div>
        </div>
    );
}

export default NavBar;