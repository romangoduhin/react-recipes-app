import React, {useEffect, useState} from 'react';
import styles from './MainPage.module.scss';
import spoonacularAPI from "../../services/spoonacularApi/api"

function MainPage() {
    const [recipes, setRecipes] = useState([]);

    async function setRandomRecipes() {
        const count = 20;
        const recipes = await spoonacularAPI.getRandomRecipes(count);
        setRecipes(recipes);
    }

    useEffect(() => {
        setRandomRecipes();
    }, [])

    return (
        <div className={styles.mainPage}>
            <div className={styles.recipesList}>
                {recipes && recipes.map(el => <div className={styles.recipe} key={el.id}>
                    <img className={styles.image} src={el.image} alt="recipe image"/>

                    <div className={styles.title}>
                        <b>{el.title}</b>
                    </div>

                    <div className={styles.info}>
                        <div>
                            <span>Vegan</span>
                            <b>{el.vegan ? "Yes" : "No"}</b>
                        </div>

                        <div>
                            <span>Health score</span>
                            <b>{el.healthScore}</b>
                        </div>

                        <div>
                            <span>Cooking time</span>
                            <b>{el.readyInMinutes}m</b>
                        </div>
                    </div>
                </div>)}
            </div>
        </div>
    );
}

export default MainPage;