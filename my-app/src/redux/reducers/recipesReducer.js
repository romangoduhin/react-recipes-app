import {
    CLEAR_SEARCHED_RECIPES,
    SET_POPULAR_RECIPES,
    SET_SEARCHED_RECIPES,
    CLEAR_POPULAR_RECIPES,
    } from "../actions/recipesActions";

const initialState = {
    popularRecipes: null,
    searchedValue: null,
    searchedRecipes: null,
    searchType: 'name',
}

const recipesReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_POPULAR_RECIPES:
            return {
                ...state,
                popularRecipes: [...action.recipes]
            }
        case CLEAR_POPULAR_RECIPES:
            return {
                ...state,
                popularRecipes: null
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


