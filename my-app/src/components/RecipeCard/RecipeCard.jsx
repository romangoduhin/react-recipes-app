import React from 'react';
import styles from "./RecipeCard.module.scss";
import PropTypes from 'prop-types';
import {NavLink} from "react-router-dom";


function RecipeCard({recipe}) {
    return <NavLink to={`/recipe/${recipe.id}`}>
        <div className={styles.recipeCard} key={recipe.id}>
            <img src={recipe.image ? recipe.image : "/logoSmall.png"} alt="recipe image"/>

            <div className={styles.content}>
                <div className={styles.title}>
                    <p><span>RECIPE</span> {recipe.sourceName && <>| FROM {recipe.sourceName}</>}</p>

                    <b>{recipe.title}</b>
                </div>

                <div className={styles.info}>
                    {recipe.vegan !== undefined && <div>
                        <span>Vegan</span>
                        <b>{recipe.vegan ? "Yes" : "No"}</b>
                    </div>}

                    {recipe.aggregateLikes !== null && recipe.aggregateLikes !== undefined && <div>
                        <span>Likes</span>
                        <b>{recipe.aggregateLikes}</b>
                    </div>}

                    {recipe.readyInMinutes && <div>
                        <span>Cooking time</span>
                        <b>{recipe.readyInMinutes}m</b>
                    </div>}
                </div>
            </div>
        </div>
    </NavLink>
}

RecipeCard.defaultProps = {
    recipe: null,
}

RecipeCard.propTypes = {
    recipe: PropTypes.object,
}

export default RecipeCard;