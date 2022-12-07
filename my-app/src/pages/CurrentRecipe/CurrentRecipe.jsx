import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import spoonacularAPI from "../../services/spoonacularApi/api";
import Loading from "../../components/Loading/Loading";
import styles from "./CurrentRecipe.module.scss";
import DifficultyIndicator from "./components/DifficultyIndicator/DifficultyIndicator";
import Ingredients from "./components/Ingredients/Ingredients";
import Categories from "./components/Categories/Categories";
import LikesCounter from "../../components/LikesCounter/LikesCounter";
import Summary from "./components/Summary/Summary";
import Method from "./components/Method/Method";
import InfoPanel from "./components/InfoPanel/InfoPanel";
import Image from "./components/Image/Image";


function CurrentRecipe() {
    const {id} = useParams();

    const [currentRecipe, setCurrentRecipe] = useState(null);

    function getRandDiffLvl(min, max) {
        return Math.floor(min + Math.random() * (max + 1 - min)); //API doesnt have diff level, here we simulate it
    }

    async function setCurrentRecipeData(id) {
        let data = await spoonacularAPI.getRecipeById(id);
        if (data) {
            setCurrentRecipe(data)
        }
    }

    useEffect(() => {
        setCurrentRecipeData(id)
    }, [])

    return currentRecipe
        ? <div className={styles.wrapper}>
            <h1 className={styles.title}>{currentRecipe.title}</h1>

            <div className={styles.preInfo}>
                <LikesCounter likesCount={currentRecipe.aggregateLikes}/>
                <DifficultyIndicator level={getRandDiffLvl(0, 5)}/>
            </div>

            <Image src={currentRecipe.image}/>

            <div className={styles.infoWrapper}>
                <InfoPanel cookingTime={currentRecipe.readyInMinutes}
                           servingsCount={currentRecipe.servings}
                           isVegan={currentRecipe.vegan}
                           isVegetarian={currentRecipe.vegetarian}
                />
                <div className={styles.content}>
                    <div className={styles.specification}>
                        <Ingredients servingsCount={currentRecipe.servings}
                                     ingredients={currentRecipe.extendedIngredients}
                        />

                        <Categories categories={currentRecipe.dishTypes}/>
                    </div>

                    <div className={styles.description}>
                        <Summary summary={currentRecipe.summary}/>

                        {currentRecipe.analyzedInstructions[0] &&
                            <Method instructions={currentRecipe.analyzedInstructions[0].steps}/>}
                    </div>
                </div>
            </div>
        </div>
        : <Loading/>
}

export default CurrentRecipe;