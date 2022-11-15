import spoonacularAPI from "../../services/spoonacularApi/api";
import {setRandomRecipesAction} from "../actions/recipesActions";

const setRandomRecipesThunk = () => {
    return async function (dispatch) {
        const count = 5;
        const recipes = await spoonacularAPI.getRandomRecipes(count);
        dispatch(setRandomRecipesAction(recipes))
    }
}
export default setRandomRecipesThunk;