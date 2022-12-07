import React from 'react';
import styles from "./MenuList.module.scss";
import {NavLink} from "react-router-dom";
import PropTypes from "prop-types";
import {auth} from "../../../../../../services/firebase/firebase";


function MenuList({onClick, onSignOut}) {
    return <div className={styles.menuList}>
        <ul>
            <li onClick={onClick}>
                <NavLink
                    className={({isActive}) => (isActive ? `${styles.active}` : undefined)}
                    to={'/'}>
                    Home
                </NavLink>
            </li>
            <li onClick={onClick}>
                <NavLink
                    className={({isActive}) => (isActive ? `${styles.active}` : undefined)}
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

            {auth.currentUser && auth.currentUser.email
                ? <>
                    <li className={styles.email}>
                        {auth.currentUser.email}
                    </li>

                    <li onClick={onSignOut} className={styles.signOut}>
                        sign out
                    </li>
                </>
                : <li onClick={onClick}>
                    <NavLink to={'/auth'}>
                        sign in / sign up
                    </NavLink>
                </li>
            }
        </ul>
    </div>
}

MenuList.defaultProps = {
    onClick: () => {
    },
    onSignOut: () => {
    },
}

MenuList.propTypes = {
    onClick: PropTypes.func,
    onSignOut: PropTypes.func,
}

export default MenuList;