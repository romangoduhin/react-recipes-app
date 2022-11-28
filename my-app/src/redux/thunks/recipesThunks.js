import spoonacularAPI from "../../services/spoonacularApi/api";
import {setRandomRecipesAction, setSearchedRecipesAction, setPopularRecipesAction} from "../actions/recipesActions";


export const setRandomRecipesThunk = (count = 10) => {
    return async function (dispatch) {
        const recipes = await spoonacularAPI.getRandomRecipes(count);
        if (recipes) {
            dispatch(setRandomRecipesAction(recipes))
        }
    }
}

export const setPopularRecipesThunk = (count = 10) => {
    return async function (dispatch) {
        const recipes = await spoonacularAPI.getRandomRecipes(count); //imitate popular recipes request

        if (recipes) {
            let sortedByLikesRecipes = recipes.sort((a, b) => b.aggregateLikes - a.aggregateLikes)
            dispatch(setPopularRecipesAction(sortedByLikesRecipes))
        }
    }
}

export const setSearchedRecipesThunk = (value) => {
    return async function (dispatch) {
        const recipes = await spoonacularAPI.getRecipeBySearch(value); //imitate popular recipes request

        if (recipes) {
            dispatch(setSearchedRecipesAction(value, recipes.results))
        }
    }
}