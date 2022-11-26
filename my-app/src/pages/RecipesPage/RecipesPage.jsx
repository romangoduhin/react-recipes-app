import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {setPopularRecipesThunk, setRandomRecipesThunk} from "../../redux/thunks/recipesThunks";
import Loading from "../../components/Loading/Loading";
import RecipeCard from "../../components/RecipeCard/RecipeCard";
import styles from "./RecipesPage.module.scss";


function RecipesPage() {
    const randomRecipesCount = 26;
    const popularRecipesCount = 9;

    const {randomRecipes} = useSelector((state) => state.recipes);

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(setRandomRecipesThunk(randomRecipesCount));
        dispatch(setPopularRecipesThunk(popularRecipesCount));
    }, [])

    return <div className={styles.wrapper}>
        {randomRecipes
            ? <div className={styles.recipesList}>
                {randomRecipes.map(el => <RecipeCard key={el.id} recipe={el}/>)}
            </div>
            : <Loading/>
        }
    </div>
}

export default RecipesPage;