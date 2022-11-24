import React, {useState} from 'react';
import styles from "./Search.module.scss";
import spoonacularAPI from "../../../../services/spoonacularApi/api";


function Search() {
    const [value, setValue] = useState('')

    function handleChange(event) {
        setValue(event.target.value)
    }

    async function handleSearch() {
        const data = await spoonacularAPI.getRecipeBySearch(value)
        console.log(data)
    }

    return (
        <div className={styles.search}>
            <div className={styles.wrapper}>
                <input
                    value={value}
                    onChange={handleChange}
                    placeholder="Search recipes"
                    type="text"
                />

                <img onClick={handleSearch} src="/searchIcon.png" alt="icon"/>
            </div>
        </div>
    );
}

export default Search;