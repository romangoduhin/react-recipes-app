export const SET_RANDOM_RECIPES = 'SET_RANDOM_RECIPES';

export const setRandomRecipesAction = (recipes) => {
    return {
        type: 'SET_RANDOM_RECIPES',
        recipes
    }
}