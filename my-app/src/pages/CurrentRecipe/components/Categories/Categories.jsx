import React from 'react';
import styles from "./Categories.module.scss";
import PropTypes from "prop-types";


function Categories({categories}) {
    function getCategories(categories) {
        return <div className={styles.list}>
            {categories.map((el) => {
                return <div key={el} className={styles.category}>
                    <span>{el}</span>
                </div>
            })}
        </div>
    }

    return <div className={styles.categories}>
        <h2>Categories</h2>
        <br/>
        {getCategories(categories)}
        <br/>
        <span className={styles.extraInfo}>
            These categories are provided as a guide only and do
            reflect any ingredients or products displayed or
            referred to on this recipe page and that are not
            listed in the recipe’s ingredients list.
            Find out more about allergy, dietary and lifestyle category tags.
        </span>
    </div>
}

Categories.defaultProps = {
    categories: [],
}

Categories.propTypes = {
    categories: PropTypes.array,
}

export default Categories;