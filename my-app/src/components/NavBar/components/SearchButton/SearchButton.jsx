import React from 'react';
import styles from "./SearchButton.module.scss";
import IconButton from "../../../IconButton/IconButton";
import {useDispatch, useSelector} from "react-redux";
import {setIsSearchOpen} from "../../../../redux/actions/appActions";

function SearchButton() {
    const dispatch = useDispatch();

    const {isSearchOpen} = useSelector((state) => state.app);

    async function handleSearchSwitch() {
        dispatch(setIsSearchOpen(!isSearchOpen))
    }

    return <div className={styles.searchBlock}>
        <span>Search</span>
        <IconButton src={'/searchIcon.svg'} width={25} height={25} onClick={handleSearchSwitch}/>
    </div>
}

export default SearchButton;