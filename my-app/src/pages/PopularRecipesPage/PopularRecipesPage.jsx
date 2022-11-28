import React, {useEffect} from 'react';
import styles from "./PopularRecipesPage.module.scss";
import Loading from "../../components/Loading/Loading";
import RecipesGrid from "../../components/RecipesGrid/RecipesGrid";
import {useDispatch, useSelector} from "react-redux";
import {setPopularRecipesThunk} from "../../redux/thunks/recipesThunks";
import {clearPopularRecipesAction} from "../../redux/actions/recipesActions";


function PopularRecipesPage() {
    const dispatch = useDispatch()

    const {popularRecipes} = useSelector((state) => state.recipes);

    useEffect(() => {
        dispatch(setPopularRecipesThunk())

        return ()=> {
            dispatch(clearPopularRecipesAction())
        }
    }, []);

    return <div className={styles.wrapper}>
        {!popularRecipes
            ? <Loading/>
            : <RecipesGrid recipes={popularRecipes}/>
        }
    </div>
}

export default PopularRecipesPage;