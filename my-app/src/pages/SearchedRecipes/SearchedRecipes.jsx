import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {setSearchedRecipesThunk} from "../../redux/thunks/recipesThunks";
import Loading from "../../components/Loading/Loading";
import styles from "./SearchedRecipes.module.scss";
import {useParams} from "react-router-dom";
import {clearSearchedRecipesAction} from "../../redux/actions/recipesActions";
import RecipesGrid from "../../components/RecipesGrid/RecipesGrid";


function SearchedRecipes() {
    const dispatch = useDispatch();
    const {query} = useParams()

    const [isLoading, setIsLoading] = useState(false);

    const {searchedRecipes} = useSelector((state) => state.recipes);
    const {searchedValue} = useSelector((state) => state.recipes);
    const {searchType} = useSelector((state) => state.app);

    function clearSearchedState() {
        dispatch(clearSearchedRecipesAction());
    }

    useEffect(() => {
        if (query) {
            setIsLoading(true)

            dispatch(setSearchedRecipesThunk(searchType, query))
        }
    }, [query]);

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
                ? <>
                    <p className={styles.header}>{searchedRecipes.length} matching results for "{searchedValue}"</p>
                    <RecipesGrid recipes={searchedRecipes}/>
                </>
                : <p className={styles.notFound}>Uh oh. We didn't find the search term "{searchedValue}" that you were
                    looking for.
                </p>
        }
    </div>
}

export default SearchedRecipes;