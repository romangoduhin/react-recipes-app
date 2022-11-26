import React from 'react';
import styles from "./RecipeCard.module.scss";
import PropTypes from 'prop-types';
import {NavLink} from "react-router-dom";
import LikesCounter from "../LikesCounter/LikesCounter";

function RecipeCard({size, recipe}) {
    return recipe && <div className={`${styles.recipeCard} ${styles[size]}`} key={recipe.id}>
        <NavLink to={`/recipe/${recipe.id}`}>
            <img className={`${styles.image} ${styles[size]}`}
                 src={recipe.image ? recipe.image : "./logoSmall.png"}
                 alt="recipe image"
            />

            <div className={size === "medium" ? `${styles.title} ${styles.medium}` : styles.title}>
                <b>{recipe.title}</b>
                {size === "medium" && <LikesCounter likesCount={recipe.aggregateLikes}/>}
            </div>

            <div className={styles.info}>
                {size === "small" && <>
                    <div>
                        <span>Vegan</span>
                        <b>{recipe.vegan ? "Yes" : "No"}</b>
                    </div>

                    <div>
                        <span>Health score</span>
                        <b>{recipe.healthScore}</b>
                    </div>

                    <div>
                        <span>Cooking time</span>
                        <b>{recipe.readyInMinutes}m</b>
                    </div>
                </>}
            </div>
        </NavLink>
    </div>
}

RecipeCard.defaultProps = {
    size: 'small',
    recipe: {},
}

RecipeCard.propTypes = {
    size: PropTypes.string,
    recipe: PropTypes.object,
}

export default RecipeCard;