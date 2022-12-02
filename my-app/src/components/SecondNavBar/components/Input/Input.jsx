import React, {useEffect, useState} from 'react';
import styles from "./Input.module.scss";
import IconButton from "../../../IconButton/IconButton";
import {formatToNormal, formatToQuery} from "../../../../assets/formaters";
import {useSelector} from "react-redux";
import {useNavigate} from "react-router-dom";
import PropTypes from "prop-types";


function Input({searchType}) {
    const navigate = useNavigate();

    const [value, setValue] = useState('');

    const {searchedValue} = useSelector((state) => state.recipes);
    const [placeholder, setPlaceholder] = useState('');

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

    useEffect(() => {
        if (searchType === 'name') {
            setPlaceholder('Enter recipe name')
        } else if (searchType === 'ingredients') {
            setPlaceholder('Example: rice salt cheese')
        }
    }, [searchType]);


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

    return <form className={styles.inputWrapper} onSubmit={handleSearch}>
        <div className={styles.searchIcon}>
            <IconButton src={'/searchIcon.svg'} width={30} height={30} onClick={handleSearch}/>
        </div>

        <input value={value} onChange={handleChange} placeholder={placeholder} type="text"/>
    </form>
}

Input.defaultProps = {
    searchType: null,
}

Input.propTypes = {
    searchType: PropTypes.string,
}

export default Input;