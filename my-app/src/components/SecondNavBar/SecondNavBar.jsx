import React from 'react';
import styles from './SecondNavBar.module.scss';
import {NavLink,} from "react-router-dom";
import {useSelector} from "react-redux";
import Input from "./components/Input/Input";
import TypeSwitcher from "./components/TypeSwitcher/TypeSwitcher";


function SecondNavBar() {
    const {searchType} = useSelector((state) => state.app);

    return <div className={styles.navBar}>
        <div className={styles.logoBlock}>
                   <span className={styles.logoText}>
                     <NavLink to='/'>react recipes</NavLink>
                   </span>
        </div>

        <Input searchType={searchType}/>

        <TypeSwitcher searchType={searchType}/>
    </div>
}

export default SecondNavBar;