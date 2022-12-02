import React from 'react';
import styles from './TypeSwitcher.module.scss';
import {setSearchTypeThunk} from "../../../../redux/thunks/appThunks";
import {useDispatch} from "react-redux";
import PropTypes from "prop-types";


function TypeSwitcher({searchType}) {
    const dispatch = useDispatch();

    function handleSwitch(type) {
        dispatch(setSearchTypeThunk(type))
    }

    return <div className={styles.typeSwitcher}>
        <p className={searchType === 'name' ? `${styles.active}` : undefined}
           onClick={() => handleSwitch('name')}
        >
            name
        </p>

        <p className={searchType === 'ingredients' ? `${styles.active}` : undefined}
           onClick={() => handleSwitch('ingredients')}
        >
            ingredients
        </p>
    </div>
}

TypeSwitcher.defaultProps = {
    searchType: null,
}

TypeSwitcher.propTypes = {
    searchType: PropTypes.string,
}

export default TypeSwitcher;