export const SET_RANDOM_RECIPES = 'SET_RANDOM_RECIPES';
export const SET_POPULAR_RECIPES = 'SET_POPULAR_RECIPES';

export const setRandomRecipesAction = (recipes) => {
    return {
        type: 'SET_RANDOM_RECIPES',
        recipes
    }
}

export const setPopularRecipesAction = (recipes) => {
    return {
        type: 'SET_POPULAR_RECIPES',
        recipes
    }
}