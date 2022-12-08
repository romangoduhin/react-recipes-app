import React from 'react';
import styles from './SecondNavBar.module.scss';
import {NavLink,} from "react-router-dom";
import Input from "./components/Input/Input";
import TypeSwitcher from "./components/TypeSwitcher/TypeSwitcher";
import BurgerMenu from "../BurgerMenu/BurgerMenu";


function SecondNavBar() {
    return <div className={styles.navBar}>
        <BurgerMenu/>

        <div className={styles.logoBlock}>
                   <span className={styles.logoText}>
                     <NavLink to='/'>react recipes</NavLink>
                   </span>
        </div>

        <Input/>

        <TypeSwitcher/>
    </div>
}

export default SecondNavBar;