import React, {useEffect, useState} from 'react';
import styles from './SecondNavBar.module.scss';
import {NavLink, useNavigate} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import IconButton from "../IconButton/IconButton";
import {formatToNormal, formatToQuery} from "../../assets/formaters";
import {setSearchTypeAction} from "../../redux/actions/appActions";


function SecondNavBar() {
    const navigate = useNavigate();

    const dispatch = useDispatch();

    const {searchedValue} = useSelector((state) => state.recipes);
    const {searchType} = useSelector((state) => state.app);

    const [value, setValue] = useState('');
    const [placeholder, setPlaceholder] = useState('Input the name of recipe');

    function handleChange(event) {
        setValue(event.target.value);
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
        if (searchedValue) {
            let value;

            if (searchType === 'ingredients') {
                value = formatToNormal(searchedValue)
            } else if (searchType === 'name') {
                value = searchedValue
            }

            setValue(value);
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
                     <NavLink to='/'>react recipes</NavLink>
                   </span>
        </div>

        <form className={styles.inputWrapper} onSubmit={handleSearch}>
            <div className={styles.searchIcon}>
                <IconButton src={'/searchIcon.svg'} width={30} height={30} onClick={handleSearch}/>
            </div>
            <input value={value} onChange={handleChange} placeholder={placeholder} type="text"/>
        </form>

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
    </div>
}

export default SecondNavBar;