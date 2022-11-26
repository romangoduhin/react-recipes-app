import React from 'react';
import styles from "./BurgerMenu.module.scss";
import PropTypes from "prop-types";
import IconButton from "../IconButton/IconButton";
import RandomButton from "./components/RandomButton/RandomButton";
import {NavLink} from "react-router-dom";


function BurgerMenu({isOpen, handleSwitch}) {
    return <>
        <div className={styles.burgerMenuButton}>
            <img onClick={handleSwitch} src="/burgerIcon.svg" alt="icon"/>
        </div>

        <div className={isOpen ? `${styles.burgerMenu} ${styles.opened}` : styles.burgerMenu}>
            <IconButton src={'/closeIcon.svg'} width={25} height={25} onClick={handleSwitch}/>

            <RandomButton/>

            <div className={styles.menuList}>
                <ul>
                    <li>
                        <NavLink to={'/recipes'}>
                            Recipes
                        </NavLink>
                    </li>
                    <li>
                        <a href={'https://www.linkedin.com/in/romangoduhin/'} target="_blank">
                            LinkedIn
                        </a>
                    </li>
                    <li>
                        <a href={'https://github.com/romangoduhin'} target="_blank">
                            GitHub
                        </a>
                    </li>
                    <li>
                        <NavLink to={'/signin'}>
                            Sign In
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to={'/signup'}>
                            Sign Up
                        </NavLink>
                    </li>
                </ul>
            </div>
        </div>
    </>
}

BurgerMenu.defaultProps = {
    isOpen: false,
    handleSwitch: () => {
    },
}

BurgerMenu.propTypes = {
    isOpen: PropTypes.bool,
    handleSwitch: PropTypes.func,
}

export default BurgerMenu;