import spoonacularAPI from "../../services/spoonacular/api";
import {setSearchedRecipesAction, setPopularRecipesAction, setRandomRecipesAction} from "../actions/recipesActions";


export const setPopularRecipesThunk = (count = 12) => {
    return async function (dispatch) {
        const recipes = await spoonacularAPI.getRandomRecipes(count); //imitate popular recipes request

        if (recipes) {
            let sortedByLikesRecipes = recipes.sort((a, b) => b.aggregateLikes - a.aggregateLikes)
            dispatch(setPopularRecipesAction(sortedByLikesRecipes))
        }
    }
}

export const setRandomRecipesThunk = (count = 12) => {
    return async function (dispatch) {
        const recipes = await spoonacularAPI.getRandomRecipes(count);

        if (recipes) {
            dispatch(setRandomRecipesAction(recipes))
        }
    }
}

export const setSearchedRecipesThunk = (type, value, count = 12) => {
    return async function (dispatch) {
        let recipes;

        if (type === 'name') {
            recipes = await spoonacularAPI.getRecipesByName(value, count);
            recipes && dispatch(setSearchedRecipesAction(value, recipes.results))
        } else if (type === 'ingredients') {
            recipes = await spoonacularAPI.getRecipesByIngredients(value, count);
            recipes && dispatch(setSearchedRecipesAction(value, recipes))
        }
    }
}
