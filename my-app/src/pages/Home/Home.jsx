import React, {useEffect} from 'react';
import styles from './Home.module.scss';
import Search from "./components/Search/Search";
import Carousel from "../../components/Carousel/Carousel";
import {useDispatch, useSelector} from "react-redux";
import {setPopularRecipesThunk} from "../../redux/thunks/recipesThunks";
import {clearPopularRecipesAction} from "../../redux/actions/recipesActions";


function Home() {
    const dispatch = useDispatch();

    const {popularRecipes} = useSelector((state) => state.recipes);

    useEffect(() => {
        dispatch(setPopularRecipesThunk(25))

        return () => {
            dispatch(clearPopularRecipesAction())
        }
    }, []);

    return <div className={styles.wrapper} style={{backgroundImage: `url(/searchBgImg.jpg)`}}>
        <Search/>
        <Carousel recipes={popularRecipes} slidersCount={3}/>
    </div>
}

export default Home;