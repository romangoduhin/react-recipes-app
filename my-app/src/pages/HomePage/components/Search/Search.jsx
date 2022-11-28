import React, {useState} from 'react';
import styles from "./Search.module.scss";
import Modal from "../../../../components/Modal/Modal";
import {useDispatch, useSelector} from "react-redux";
import {setIsSearchOpen} from "../../../../redux/actions/appActions";
import IconButton from "../../../../components/IconButton/IconButton";
import {setSearchedRecipesThunk} from "../../../../redux/thunks/recipesThunks";


function Search() {
    const dispatch = useDispatch();

    const {isSearchOpen} = useSelector((state) => state.app);

    const [value, setValue] = useState('');

    function handleChange(event) {
        setValue(event.target.value)
    }

    async function handleSwitch() {
        dispatch(setIsSearchOpen(!isSearchOpen))
    }

    function handleSearch(e) {
        e.preventDefault();
        dispatch(setSearchedRecipesThunk(value))
    }

    return <>
        <div style={{backgroundImage: `url(/searchBgImg.jpg)`}} className={styles.search}>
            <h1>Find a Recipe</h1>
            <br/>
            <div className={styles.inputButton} onClick={handleSwitch}>
                <IconButton src={'/searchIcon.svg'} width={35} height={35}/>
            </div>
        </div>

        {isSearchOpen && <Modal backgroundColor={'rgba(255,255,255, 0.8)'}>
            <div className={styles.header}>
                <IconButton src={'/closeIcon.svg'} width={25} height={25} onClick={handleSwitch}/>
            </div>

            <br/>
            <br/>

            <form className={styles.inputWrapper} onSubmit={handleSearch}>
                <div className={styles.imgWrapper}>
                    <IconButton src={'/searchIcon.svg'} width={50} height={50} onClick={handleSearch}/>
                </div>

                <input value={value}
                       onChange={handleChange}
                       className={styles.input}
                       placeholder={'Find a Recipe'}
                />
            </form>
        </Modal>}
    </>
}

export default Search;