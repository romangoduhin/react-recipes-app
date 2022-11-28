import {
    CLEAR_SEARCHED_RECIPES,
    SET_RANDOM_RECIPES,
    SET_POPULAR_RECIPES,
    SET_SEARCHED_RECIPES
} from "../actions/recipesActions";

const initialState = {
    randomRecipes: null,
    popularRecipes: null,
    searchedValue: null,
    searchedRecipes: null,
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
        case SET_SEARCHED_RECIPES:
            return {
                ...state,
                searchedValue: action.value,
                searchedRecipes: [...action.recipes]
            }
        case CLEAR_SEARCHED_RECIPES:
            return {
                ...state,
                searchedValue: null,
                searchedRecipes: null
            }
        default:
            return state
    }
}

export default recipesReducer;


