import {SET_RANDOM_RECIPES} from "../actions/recipesActions";
import {SET_POPULAR_RECIPES} from "../actions/recipesActions";

const initialState = {
    randomRecipes: [],
    popularRecipes: [],
}

const recipesReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_RANDOM_RECIPES:
            return {
                ...state,
                randomRecipes: [...action.recipes]
            }
        case SET_POPULAR_RECIPES:
            return {
                ...state,
                popularRecipes: [...action.recipes]
            }
        default:
            return state
    }
}

export default recipesReducer;


