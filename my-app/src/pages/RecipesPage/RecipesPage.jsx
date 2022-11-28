import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {setSearchedRecipesThunk} from "../../redux/thunks/recipesThunks";
import Loading from "../../components/Loading/Loading";
import RecipeCard from "../../components/RecipeCard/RecipeCard";
import styles from "./RecipesPage.module.scss";
import {useParams} from "react-router-dom";
import {clearSearchedRecipesAction} from "../../redux/actions/recipesActions";


function RecipesPage() {
    const dispatch = useDispatch();
    const {recipeName} = useParams();

    const [isLoading, setIsLoading] = useState(false);

    const {searchedRecipes} = useSelector((state) => state.recipes);
    const {searchedValue} = useSelector((state) => state.recipes);

    function clearSearchedState() {
        dispatch(clearSearchedRecipesAction());
    }

    useEffect(() => {
        if (recipeName) {
            setIsLoading(true)
            dispatch(setSearchedRecipesThunk(recipeName))
        }
    }, [recipeName]);

    useEffect(() => {
        if (searchedRecipes) {
            setIsLoading(false)
        }
    }, [searchedRecipes]);


    useEffect(() => {
        return () => {
            clearSearchedState()
        };
    }, []);


    return <div className={styles.wrapper}>
        {isLoading
            ? <Loading/>
            : searchedRecipes && searchedRecipes.length !== 0
                ? <div className={styles.recipesList}>
                    {searchedRecipes.map(el => <RecipeCard key={el.id} recipe={el}/>)}
                </div>
                : <p className={styles.notFound}>Uh oh. We didn't find the search term "{searchedValue}" that you were
                    looking for.
                </p>
        }
    </div>
}

export default RecipesPage;