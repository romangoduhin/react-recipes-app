import React, {useEffect, useState} from 'react';
import styles from "./Search.module.scss";
import Modal from "../../../../components/Modal/Modal";
import {useDispatch, useSelector} from "react-redux";
import {setIsSearchOpen} from "../../../../redux/actions/appActions";
import IconButton from "../../../../components/IconButton/IconButton";
import {useNavigate} from "react-router-dom";


function Search() {
    const dispatch = useDispatch();

    const navigate = useNavigate();

    const {isSearchOpen} = useSelector((state) => state.app);

    const [value, setValue] = useState('');

    console.log(isSearchOpen)

    function handleChange(event) {
        setValue(event.target.value)
    }

    async function handleSwitch() {
        dispatch(setIsSearchOpen(!isSearchOpen))
        setValue('')
    }

    function handleSearch(e) {
        if (value) {
            e.preventDefault()
            navigate(`/recipes/search/${value}`)
        }
    }

    useEffect(() => {
        return () => {
            dispatch(setIsSearchOpen(false))
            setValue('')
        };
    }, []);


    return <>
        <div className={styles.search}>
            <h1>Find a Recipe</h1>
            <br/>
            <div className={styles.inputButton} onClick={handleSwitch}>
                <IconButton src={'/searchIcon.svg'} width={35} height={35}/>
            </div>
        </div>

        {isSearchOpen && <Modal backgroundColor={'rgba(255,255,255, 0.7)'}>
            <div className={styles.header}>
                <IconButton src={'/closeIcon.svg'} width={25} height={25} onClick={handleSwitch}/>
            </div>

            <br/>
            <br/>

            <form className={styles.inputWrapper} onSubmit={handleSearch} autofocus>
                <div className={styles.imgWrapper}>
                    <IconButton src={'/searchIcon.svg'} width={50} height={50} onClick={handleSearch}/>
                </div>

                <input value={value}
                       onChange={handleChange}
                       className={styles.input}
                       placeholder={'Find a Recipe'}
                       autoFocus={true}
                />
            </form>
        </Modal>}
    </>
}

export default Search;