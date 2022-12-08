import React, {useEffect, useState} from 'react';
import styles from "./PopularRecipes.module.scss";
import Loading from "../../components/Loading/Loading";
import RecipesGrid from "../../components/RecipesGrid/RecipesGrid";
import {useDispatch, useSelector} from "react-redux";
import {setPopularRecipesThunk} from "../../redux/thunks/recipesThunks";
import {clearPopularRecipesAction} from "../../redux/actions/recipesActions";
import Pagination from "../../components/Pagination/Pagination";
import {arrayDivisor} from "../../assets/arrayDivisor";
import Filter from "../../components/Filter/Filter";


function PopularRecipes() {
    const pageSize = 12;

    const dispatch = useDispatch()

    const {popularRecipes} = useSelector((state) => state.recipes);
    const [currentPage, setCurrentPage] = useState(1);
    const [recipes, setRecipes] = useState(null);
    const [totalCount, setTotalCount] = useState(null);

    function getCurrentPageRecipes() {
        return recipes[currentPage - 1];
    }

    function onFilterApply(sortedArr) {
        let arr = arrayDivisor(sortedArr, pageSize)

        setRecipes(arr)
    }

    function onPageChanged(page) {
        setCurrentPage(page)
    }

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [currentPage]);

    useEffect(() => {
        if (popularRecipes) {
            let arr = arrayDivisor(popularRecipes, pageSize)

            setRecipes(arr);
            setTotalCount(popularRecipes.length)
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
                <Filter values={popularRecipes} onFilterApply={onFilterApply}/>
                <RecipesGrid recipes={getCurrentPageRecipes()}/>
                <Pagination pageSize={pageSize}
                            totalCount={totalCount}
                            currentPage={currentPage}
                            onPageChanged={onPageChanged}/>
            </>
        }
    </div>
}

export default PopularRecipes;