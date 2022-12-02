import React, {useEffect, useState} from 'react';
import styles from './Home.module.scss';
import Search from "./components/Search/Search";
import Carousel from "../../components/Carousel/Carousel";
import {useDispatch, useSelector} from "react-redux";
import {setPopularRecipesThunk} from "../../redux/thunks/recipesThunks";
import {clearPopularRecipesAction} from "../../redux/actions/recipesActions";
import {arrayDivisor} from "../../assets/arrayDivisor";
import Loading from "../../components/Loading/Loading";


function Home() {
    const slidersCount = 3

    const dispatch = useDispatch();

    const {popularRecipes} = useSelector((state) => state.recipes);

    const [recipes, setRecipes] = useState(null);

    function getCarousels() {
        return <div className={styles.carousels}>
            {recipes
                ? recipes.map((el, ind) => <Carousel key={ind} recipes={el} slidersCount={slidersCount}/>)
                : <Loading width={'100%'} height={'100%'}/>
            }
        </div>
    }

    useEffect(() => {
        if (popularRecipes) {
            let arr = arrayDivisor(popularRecipes, slidersCount);
            setRecipes(arr);
        }
    }, [popularRecipes]);


    useEffect(() => {
        dispatch(setPopularRecipesThunk(12))

        return () => {
            dispatch(clearPopularRecipesAction())
        }
    }, []);

    return <div className={styles.wrapper}>
        <Search/>
        {recipes && getCarousels()}
    </div>
}

export default Home;