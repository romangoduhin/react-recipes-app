import React from 'react';
import styles from "./MenuList.module.scss";
import {NavLink} from "react-router-dom";
import PropTypes from "prop-types";


function MenuList({onClick}) {
    return <div className={styles.menuList}>
        <ul>
            <li onClick={onClick}>
                <NavLink
                    className={({ isActive }) => (isActive ? `${styles.active}` : undefined)}
                    to={'/'}>
                    Home
                </NavLink>
            </li>
            <li onClick={onClick}>
                <NavLink
                    className={({ isActive }) => (isActive ? `${styles.active}` : undefined)}
                    to={'/recipes/popular'}>
                    Popular
                </NavLink>
            </li>
            <li onClick={onClick}>
                <a
                    href={'https://www.linkedin.com/in/romangoduhin/'}
                    target="_blank" rel="noreferrer">
                    LinkedIn
                </a>
            </li>
            <li onClick={onClick}>
                <a
                    href={'https://github.com/romangoduhin'} target="_blank" rel="noreferrer">
                    GitHub
                </a>
            </li>
            <li onClick={onClick}>
                <NavLink to={'/auth'}>
                    Authentication
                </NavLink>
            </li>
        </ul>
    </div>
}

MenuList.defaultProps = {
    onClick: ()=>{},
}

MenuList.propTypes = {
    onClick: PropTypes.func,
}

export default MenuList;