import spoonacularAPI from "../../services/spoonacularApi/api";
import {setRandomRecipesAction} from "../actions/recipesActions";
import {setPopularRecipesAction} from "../actions/recipesActions";

export const setRandomRecipesThunk = (count = 10) => {
    return async function (dispatch) {
        const recipes = await spoonacularAPI.getRandomRecipes(count);
        dispatch(setRandomRecipesAction(recipes))
    }
}

export const setPopularRecipesThunk = (count = 10) => {
    return async function (dispatch) {
        const recipes = await spoonacularAPI.getRandomRecipes(count); //imitate popular recipes request
        let sortedByLikesRecipes = recipes.sort((a, b) => b.aggregateLikes - a.aggregateLikes)
        dispatch(setPopularRecipesAction(sortedByLikesRecipes))
    }
}
