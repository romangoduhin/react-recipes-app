import React, {useEffect, useState} from 'react';
import styles from './MainPage.module.scss';
import spoonacularAPI from "../../services/spoonacularApi/api"
import RecipeCard from "../../components/RecipeCard/RecipeCard";

function MainPage() {
    const [recipes, setRecipes] = useState([]);

    async function setRandomRecipes() {
        const count = 2;
        const recipes = await spoonacularAPI.getRandomRecipes(count);
        setRecipes(recipes);
    }

    useEffect(() => {
        setRandomRecipes();
    }, [])

    return (
        <div className={styles.mainPage}>
            <div className={styles.recipesList}>
                {recipes && recipes.map(el => <RecipeCard key={el.id} data={el}/>)}
            </div>
        </div>
    );
}

export default MainPage;