import React, {useEffect, useState} from 'react';
import styles from './Home.module.scss';
import Search from "./components/Search/Search";
import Carousel from "../../components/Carousel/Carousel";
import {useDispatch, useSelector} from "react-redux";
import {setRandomRecipesThunk} from "../../redux/thunks/recipesThunks";
import {clearRandomRecipesAction} from "../../redux/actions/recipesActions";
import {arrayDivisor} from "../../assets/arrayDivisor";
import Loading from "../../components/Loading/Loading";


function Home() {
    const slidersCount = 3

    const dispatch = useDispatch();

    const {randomRecipes} = useSelector((state) => state.recipes);

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
        if (randomRecipes) {
            let arr = arrayDivisor(randomRecipes, slidersCount);
            setRecipes(arr);
        }
    }, [randomRecipes]);


    useEffect(() => {
        dispatch(setRandomRecipesThunk(12))

        return () => {
            dispatch(clearRandomRecipesAction())
        }
    }, []);

    return <div className={styles.wrapper}>
        <Search/>
        {getCarousels()}
    </div>
}

export default Home;