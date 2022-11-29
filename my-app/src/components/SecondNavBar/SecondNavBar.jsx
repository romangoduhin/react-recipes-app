import React, {useEffect, useState} from 'react';
import styles from './SecondNavBar.module.scss';
import {NavLink, useNavigate} from "react-router-dom";
import {useSelector} from "react-redux";
import IconButton from "../IconButton/IconButton";


function SecondNavBar() {
    const navigate = useNavigate();

    const {searchedValue} = useSelector((state) => state.recipes);

    const [value, setValue] = useState(searchedValue ? searchedValue : '');

    function handleChange(event) {
        setValue(event.target.value);
    }

    function handleSearch(e) {
        if (value) {
            e.preventDefault()
            navigate(`/recipes/search/${value}`)
        }
    }

    useEffect(() => {
        if (searchedValue) {
            setValue(searchedValue);
        }
    }, [searchedValue])

    useEffect(() => {
        return () => {
            setValue('')
        };
    }, []);


    return <div className={styles.navBar}>
            <div className={styles.logoBlock}>
                   <span className={styles.logoText}>
                     <NavLink to='/'>simply recipes</NavLink>
                   </span>
            </div>

            <form className={styles.inputWrapper} onSubmit={handleSearch}>
                <div className={styles.searchIcon}>
                    <IconButton src={'/searchIcon.svg'} width={30} height={30} onClick={handleSearch}/>
                </div>
                <input value={value} onChange={handleChange} placeholder={'Find a Recipe'} type="text"/>
            </form>
        </div>
}

export default SecondNavBar;