import React, {useEffect} from 'react';
import styles from './MainPage.module.scss';
import RecipeCard from "../../components/RecipeCard/RecipeCard";
import {useDispatch, useSelector} from "react-redux";
import {setPopularRecipesThunk, setRandomRecipesThunk} from "../../redux/thunks/recipesThunks";
import Carousel from "../../components/Carousel/Carousel";

function MainPage() {
    const randomRecipesCount = 10;
    const popularRecipesCount = 3;

    const {randomRecipes} = useSelector((state) => state.recipes);
    const {popularRecipes} = useSelector((state) => state.recipes);

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(setRandomRecipesThunk(randomRecipesCount));
        dispatch(setPopularRecipesThunk(popularRecipesCount));
    }, [])

    return (
        <div className={styles.mainPage}>
            <Carousel slidersCount={popularRecipesCount} recipes={popularRecipes} />

            <div className={styles.recipesList}>
                {randomRecipes && randomRecipes.map(el => <RecipeCard size={'small'} key={el.id} recipe={el}/>)}
            </div>
        </div>
    );
}

export default MainPage;