import React, {useEffect, useState} from 'react';
import styles from "./PopularRecipesPage.module.scss";
import Loading from "../../components/Loading/Loading";
import RecipesGrid from "../../components/RecipesGrid/RecipesGrid";
import {useDispatch, useSelector} from "react-redux";
import {setPopularRecipesThunk} from "../../redux/thunks/recipesThunks";
import {clearPopularRecipesAction} from "../../redux/actions/recipesActions";
import Pagination from "../../components/Pagination/Pagination";


function PopularRecipesPage() {
    const pageSize = 12;

    const dispatch = useDispatch()

    const {popularRecipes} = useSelector((state) => state.recipes);
    const [currentPage, setCurrentPage] = useState(1);
    const [recipes, setRecipes] = useState(null);
    const [totalCount, setTotalCount] = useState(null);


    function getCurrenPageRecipes() {
        return recipes[currentPage - 1];
    }

    function onPageChanged(page) {
        setCurrentPage(page)
    }

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [currentPage]);


    useEffect(() => {
        if (popularRecipes) {
            setTotalCount(popularRecipes.length)

            let newArray = [];
            let array = popularRecipes
            let subArraySize = pageSize;
            for (let i = 0; i < Math.ceil(array.length / subArraySize); i++) {
                newArray[i] = array.slice((i * subArraySize), (i * subArraySize) + subArraySize);
            }
            setRecipes(newArray);
        }
    }, [popularRecipes]);

    useEffect(() => {
        dispatch(setPopularRecipesThunk(25))

        return () => {
            dispatch(clearPopularRecipesAction())
        }
    }, []);


    return <div className={styles.wrapper}>
        {!recipes
            ? <Loading/>
            : <>
                <RecipesGrid recipes={getCurrenPageRecipes()}/>
                <Pagination pageSize={pageSize}
                            totalCount={totalCount}
                            currentPage={currentPage}
                            onPageChanged={onPageChanged}/>
            </>
        }
    </div>
}

export default PopularRecipesPage;