import React from 'react';
import styles from "./Ingredients.module.scss";
import PropTypes from "prop-types";

function Ingredients({servingsCount, ingredients}) {
    function getIngredients(ingredients) {
        return ingredients.map((el) => {
            return <li key={el.id}>
                <span>
                    {el.measures.metric.amount}{el.measures.metric.unitShort}&nbsp;
                </span>
                {el.name}
            </li>
        })
    }

    return <div className={styles.ingredients}>
        <div className={styles.header}>
            <h2>Ingredients</h2>
            <br/>
            <h4>Number of servings: {servingsCount}</h4>
        </div>

        <ul className={styles.list}>
            {getIngredients(ingredients)}
        </ul>
    </div>
}

Ingredients.defaultProps = {
    servingsCount: 0,
    ingredients: [],
}

Ingredients.propTypes = {
    servingsCount: PropTypes.number,
    ingredients: PropTypes.array,
}

export default Ingredients;