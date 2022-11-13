import React, {useEffect} from 'react';
import styles from './MainPage.module.scss';
import spoonacularAPI from "../../services/spoonacularApi/api"
import RecipeCard from "../../components/RecipeCard/RecipeCard";
import {useDispatch, useSelector} from "react-redux";
import {setRandomRecipesAction} from "../../redux/actions/recipesActions";

function MainPage() {
    const {randomRecipes} = useSelector((state) => state.recipes);

    const dispatch = useDispatch();

    async function setRandomRecipes() {
        const count = 5;
        const recipes = await spoonacularAPI.getRandomRecipes(count);
        dispatch(setRandomRecipesAction(recipes))
    }

    useEffect(() => {
        setRandomRecipes();
    }, [])

    return (
        <div className={styles.mainPage}>
            <div className={styles.recipesList}>
                {randomRecipes && randomRecipes.map(el => <RecipeCard key={el.id} data={el}/>)}
            </div>
        </div>
    );
}

export default MainPage;