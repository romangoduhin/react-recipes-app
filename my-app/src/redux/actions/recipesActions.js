export const SET_POPULAR_RECIPES = 'SET_POPULAR_RECIPES';
export const CLEAR_POPULAR_RECIPES = 'CLEAR_POPULAR_RECIPES';
export const SET_RANDOM_RECIPES = 'SET_RANDOM_RECIPES';
export const CLEAR_RANDOM_RECIPES = 'CLEAR_RANDOM_RECIPES';
export const SET_SEARCHED_RECIPES = 'SET_SEARCHED_RECIPES';
export const CLEAR_SEARCHED_RECIPES = 'CLEAR_SEARCHED_RECIPES';


export const setPopularRecipesAction = (recipes) => {
    return {
        type: 'SET_POPULAR_RECIPES',
        recipes
    }
}

export const clearPopularRecipesAction = () => {
    return {
        type: 'CLEAR_POPULAR_RECIPES',
    }
}

export const setRandomRecipesAction = (recipes) => {
    return {
        type: 'SET_RANDOM_RECIPES',
        recipes
    }
}

export const clearRandomRecipesAction = () => {
    return {
        type: 'CLEAR_RANDOM_RECIPES',
    }
}

export const setSearchedRecipesAction = (value, recipes) => {
    return {
        type: 'SET_SEARCHED_RECIPES',
        value,
        recipes
    }
}

export const clearSearchedRecipesAction = () => {
    return {
        type: 'CLEAR_SEARCHED_RECIPES',
    }
}