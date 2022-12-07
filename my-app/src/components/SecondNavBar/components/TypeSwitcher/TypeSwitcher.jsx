import React from 'react';
import styles from './TypeSwitcher.module.scss';
import {setSearchTypeThunk} from "../../../../redux/thunks/appThunks";
import {useDispatch, useSelector} from "react-redux";


function TypeSwitcher() {
    const dispatch = useDispatch();

    const {searchType} = useSelector((state) => state.app);

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

export default TypeSwitcher;