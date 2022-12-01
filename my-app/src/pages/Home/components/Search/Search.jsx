import React, {useEffect, useState} from 'react';
import styles from "./Search.module.scss";
import Modal from "../../../../components/Modal/Modal";
import {useDispatch, useSelector} from "react-redux";
import {setIsSearchOpen, setSearchTypeAction} from "../../../../redux/actions/appActions";
import IconButton from "../../../../components/IconButton/IconButton";
import {useNavigate} from "react-router-dom";
import {formatToQuery} from "../../../../assets/formaters";


function Search() {
    const dispatch = useDispatch();

    const navigate = useNavigate();

    const {isSearchOpen} = useSelector((state) => state.app);
    const {searchType} = useSelector((state) => state.app);

    const [value, setValue] = useState('');
    const [placeholder, setPlaceholder] = useState('Input the name of recipe');

    function handleChange(event) {
        setValue(event.target.value)
    }

    async function handleSwitch() {
        dispatch(setIsSearchOpen(!isSearchOpen))
        setValue('')
    }

    function handleSearch(e) {
        if (value) {
            e.preventDefault();
            let query = searchType === 'ingredients' ? formatToQuery(value) : value;

            navigate(`/recipes/search/${query}`)
        }
    }

    function handleSwitchSearchType(type) {
        if (type === 'name') {
            setPlaceholder('Enter recipe name')
        } else if (type === 'ingredients') {
            setPlaceholder('Example: rice salt cheese')
        }
        dispatch(setSearchTypeAction(type))
    }

    useEffect(() => {
        return () => {
            dispatch(setIsSearchOpen(false))
            setValue('')
        };
    }, []);


    return <>
        <div className={styles.search} style={{backgroundImage: `url(/searchBgImg.jpg)`}}>
            <h1>Find a Recipe</h1>
            <br/>
            <div className={styles.inputButton} onClick={handleSwitch}>
                <IconButton src={'/searchIcon.svg'} width={35} height={35}/>
            </div>
        </div>

        {isSearchOpen && <Modal backgroundColor={'rgba(255,255,255, 0.7)'}>
            <div className={styles.header}>
                <div className={styles.searchSwitcher}>
                    <p className={searchType === 'name' ? `${styles.active}` : undefined}
                       onClick={() => handleSwitchSearchType('name')}>
                        name
                    </p>

                    <p className={searchType === 'ingredients' ? `${styles.active}` : undefined}
                       onClick={() => handleSwitchSearchType('ingredients')}>
                        ingredients
                    </p>
                </div>

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
                       placeholder={placeholder}
                       autoFocus
                />
            </form>
        </Modal>}
    </>
}

export default Search;