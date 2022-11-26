import React, {useState} from 'react';
import styles from './NavBar.module.scss';
import {NavLink} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {setIsSearchOpen} from "../../redux/actions/appActions";
import BurgerMenu from "../BurgerMenu/BurgerMenu";
import IconButton from "../IconButton/IconButton";


function NavBar() {
    const dispatch = useDispatch();

    const {isSearchOpen} = useSelector((state) => state.app);

    const [isMenuOpen, setIsMenuOpen] = useState(false);

    async function handleSearchSwitch() {
        dispatch(setIsSearchOpen(!isSearchOpen))
    }

    async function handleMenuSwitch(e) {
        e.preventDefault();
        setIsMenuOpen(!isMenuOpen)
    }

    return (
        <div className={styles.navBar}>
           <BurgerMenu isOpen={isMenuOpen} handleSwitch={handleMenuSwitch}/>

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
                <IconButton src={'/searchIcon.svg'} width={25} height={25} onClick={handleSearchSwitch}/>
            </div>
        </div>
    );
}

export default NavBar;