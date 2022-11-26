import React from 'react';
import styles from "./BurgerMenu.module.scss";
import PropTypes from "prop-types";
import IconButton from "../IconButton/IconButton";
import RandomButton from "./components/RandomButton/RandomButton";


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
                    <li>Recipes</li>
                    <li>LinkedIn</li>
                    <li>GitHub</li>
                    <li>Sign In</li>
                    <li>Sign Up</li>
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