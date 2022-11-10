import React, {useEffect, useState} from 'react';
import styles from './MainPage.module.scss';
import spoonacularAPI from "../../services/spoonacularApi/api"

function MainPage() {
    const [recipes, setRecipes] = useState([]);

    async function setRandomRecipes() {
        const count = 10;
        const recipes = await spoonacularAPI.getRandomRecipes(count);
        setRecipes(recipes);
    }

    useEffect(() => {
        setRandomRecipes();
    }, [])

    return (
        <div className={styles.mainPageWrapper}>
            <ul>{recipes && recipes.map(el => <li key={el.id}>{el.title}</li>)}</ul>
        </div>
    );
}

export default MainPage;