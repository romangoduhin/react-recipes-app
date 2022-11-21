import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import spoonacularAPI from "../../services/spoonacularApi/api";
import Loading from "../../components/Loading/Loading";
import styles from "./RecipePage.module.scss";
import ButtonWithIcon from "../../components/ButtonWithIcon/ButtonWithIcon";
import DifficultyIndicator from "./components/DifficultyIndicator/DifficultyIndicator";


function RecipePage() {
    const {id} = useParams();

    const [currentRecipe, setCurrentRecipe] = useState(null);

    function getRandDiffLvl(min, max) {
        return Math.floor(min + Math.random() * (max + 1 - min)); //API doesnt have diff level, here we simulate it
    }

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
            <div className={styles.preInfo}>
                <div className={styles.likes}>
                    <img src="/favouriteIcon.png" alt="icon"/>
                    <b>{currentRecipe.aggregateLikes}</b>
                </div>

                <div className={styles.difficulty}>
                    <b>Difficulty</b>
                    <DifficultyIndicator level={getRandDiffLvl(0, 5)}/>
                </div>
            </div>
            <div className={styles.imageWrapper}>
                <img className={styles.image} src={currentRecipe.image ? currentRecipe.image : "./logoSmall.png"}
                     alt="recipe image"/>
            </div>
            <div className={styles.infoWrapper}>
                <div className={styles.imageInfo}>
                    <div>
                        <span>Cooking time</span>
                        <b>{currentRecipe.readyInMinutes} m</b>
                    </div>

                    <div>
                        <span>Servings</span>
                        <b>{currentRecipe.servings}</b>
                    </div>

                    <div>
                        <span>Vegan</span>
                        <b>{currentRecipe.vegan ? "Yes" : "No"}</b>
                    </div>

                    <div>
                        <span>Vegetarian</span>
                        <b>{currentRecipe.vegetarian ? "Yes" : "No"}</b>
                    </div>

                    <div>
                        <ButtonWithIcon src={'/favouriteIcon.png'}/>
                    </div>
                </div>
            </div>
        </div>
        : <Loading/>
}

export default RecipePage;