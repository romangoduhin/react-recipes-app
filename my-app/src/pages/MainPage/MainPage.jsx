import React, {useEffect} from 'react';
import styles from './MainPage.module.scss';
import RecipeCard from "../../components/RecipeCard/RecipeCard";
import {useDispatch, useSelector} from "react-redux";
import setRandomRecipesThunk from "../../redux/thunks/recipesThunks";

function MainPage() {
    const {randomRecipes} = useSelector((state) => state.recipes);

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(setRandomRecipesThunk());
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