import {SET_RANDOM_RECIPES} from "../actions/recipesActions";

const initialState = {
    randomRecipes: [],
}

const recipesReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_RANDOM_RECIPES:
            return {
                ...state,
                randomRecipes: [...action.recipes]
            }
        default:
            return state
    }
}

export default recipesReducer;


