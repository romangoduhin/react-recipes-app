import React from 'react';
import styles from "./RecipesGrid.module.scss";
import RecipeCard from "../RecipeCard/RecipeCard";
import PropTypes from "prop-types";

function RecipesGrid({recipes}) {
    return <div className={styles.grid}>
        {recipes && recipes.map(el => <RecipeCard key={el.id} recipe={el}/>)}
    </div>
}

RecipesGrid.defaultProps = {
    recipes: null,
}

RecipesGrid.propTypes = {
    recipes: PropTypes.array,
}

export default RecipesGrid;