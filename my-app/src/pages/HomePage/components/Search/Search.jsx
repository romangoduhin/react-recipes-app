import React, {useState} from 'react';
import styles from "./Search.module.scss";
import spoonacularAPI from "../../../../services/spoonacularApi/api";
import Modal from "../../../../components/Modal/Modal";
import {useDispatch, useSelector} from "react-redux";
import {setIsSearchOpen} from "../../../../redux/actions/appActions";
import IconButton from "../../../../components/IconButton/IconButton";


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

    async function handleSearch(e) {
        e.preventDefault();
        const data = await spoonacularAPI.getRecipeBySearch(value)
    }

    return <>
        <div style={{backgroundImage: `url(/searchBgImg.jpg)`}} className={styles.search}>
            <h1>Find a Recipe</h1>
            <br/>
            <div className={styles.inputButton} onClick={handleSwitch}>
                <IconButton src={'/searchIcon.svg'} width={35} height={35}/>
            </div>
        </div>

        {isSearchOpen && <Modal>
            <div className={styles.modal}>
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
            </div>
        </Modal>}
    </>
}

export default Search;