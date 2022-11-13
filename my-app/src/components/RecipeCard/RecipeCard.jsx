import React from 'react';
import styles from "./RecipeCard.module.scss";
import PropTypes from 'prop-types';

function RecipeCard({data}) {
    return data && <div className={styles.recipeCard} key={data.id}>
        <img className={styles.image} src={data.image} alt="recipe image"/>

        <div className={styles.title}>
            <b>{data.title}</b>
        </div>

        <div className={styles.info}>
            <div>
                <span>Vegan</span>
                <b>{data.vegan ? "Yes" : "No"}</b>
            </div>

            <div>
                <span>Health score</span>
                <b>{data.healthScore}</b>
            </div>

            <div>
                <span>Cooking time</span>
                <b>{data.readyInMinutes}m</b>
            </div>
        </div>
    </div>
}

RecipeCard.defaultProps = {
    data: {},
}

RecipeCard.propTypes = {
    data: PropTypes.object,
}

export default RecipeCard;