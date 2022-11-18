import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import spoonacularAPI from "../../services/spoonacularApi/api";
import Loading from "../../components/Loading/Loading";
import styles from "./RecipePage.module.scss";

function RecipePage() {
    const {id} = useParams();

    const [currentRecipe, setCurrentRecipe] = useState(null)

    async function setCurrentRecipeData(id) {
        let data = await spoonacularAPI.getRecipeById(id);
        if (data) {
            setCurrentRecipe(data)
        } else return;
    }

    useEffect(() => {
        setCurrentRecipeData(id)
    }, [])

    return currentRecipe
        ? <div className={styles.wrapper}>
            <h1 className={styles.title}>{currentRecipe.title}</h1>
            {/*<div className={styles.fastInfo}>*/}
            {/*    <span>Likes</span>*/}
            {/*    <span> FAST</span>*/}
            {/*</div>*/}
            {/*<div className={styles.imageWrapper}>*/}
            {/*    <img src="" alt=""/>*/}
            {/*    <div className={styles.info}>*/}

            {/*    </div>*/}
            {/*</div>*/}
       </div>
        : <Loading/>
}

export default RecipePage;