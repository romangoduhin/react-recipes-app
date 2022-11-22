import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import spoonacularAPI from "../../services/spoonacularApi/api";
import Loading from "../../components/Loading/Loading";
import styles from "./RecipePage.module.scss";
import ButtonWithIcon from "../../components/ButtonWithIcon/ButtonWithIcon";
import DifficultyIndicator from "./components/DifficultyIndicator/DifficultyIndicator";
import parse from "html-react-parser";


function RecipePage() {
    const {id} = useParams();

    const [currentRecipe, setCurrentRecipe] = useState(null);

    function getRandDiffLvl(min, max) {
        return Math.floor(min + Math.random() * (max + 1 - min)); //API doesnt have diff level, here we simulate it
    }

    function getIngredients(ingredients) {
        return ingredients.map((el) => {
            return <li key={el.id}>
                <span>
                    {el.measures.metric.amount}{el.measures.metric.unitShort}&nbsp;
                </span>
                {el.name}
            </li>
        })
    }

    function getParsedHtml(string) {
        return parse(string);
    }

    function getSteps(steps) {
        const stepsCount = steps.length;

        return <div className={styles.steps}>
            {steps.map((step) => {
                return <div className={styles.step}>
                    <h4>Step {step.number} of {stepsCount}</h4>
                    <br/>
                    <span>{step.step}</span>
                </div>
            })}
        </div>
    }

    function getCategories(categories) {
        return <div className={styles.list}>
            {categories.map((category) => {
                return <div className={styles.category}>
                    <span>{category}</span>
                </div>
            })}
        </div>
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

                <div className={styles.content}>
                    <div className={styles.ingrAndCateg}>
                        <div className={styles.ingredients}>
                            <div className={styles.header}>
                                <h2>Ingredients</h2>
                                <br/>
                                <h4>Number of servings: {currentRecipe.servings}</h4>
                            </div>

                            <ul className={styles.list}>
                                {getIngredients(currentRecipe.extendedIngredients)}
                            </ul>
                        </div>
                        <br/>
                        <div className={styles.categories}>
                            <h2>Ingredients</h2>
                            <br/>
                            {getCategories(currentRecipe.dishTypes)}
                            <br/>
                            <span className={styles.extraInfo}>
                                These categories are provided as a guide only and do
                                reflect any ingredients or products displayed or
                                referred to on this recipe page and that are not
                                listed in the recipe’s ingredients list.
                                Find out more about allergy, dietary and lifestyle category tags.
                            </span>
                        </div>
                    </div>

                    <div className={styles.description}>
                        <div className={styles.summary}>
                            <h2>Description</h2>
                            <br/>
                            <span>{getParsedHtml(currentRecipe.summary)}</span>
                        </div>
                        <br/>
                        <div className={styles.method}>
                            <h2>Method</h2>
                            <br/>
                            {getSteps(currentRecipe.analyzedInstructions[0].steps)}
                        </div>
                    </div>
                </div>
            </div>
        </div>
        : <Loading/>
}

export default RecipePage;