import axios from "axios";

const apiKey = "22defad3dc6646869ea114e244a87882";

const recipesInstance = axios.create({
    baseURL: 'https://api.spoonacular.com/recipes/',
});

const spoonacularAPI = {
    getRandomRecipes: async (count) => {
        try {
            const response = await recipesInstance.get(`random?number=${count}&apiKey=${apiKey}`)
            return response.data.recipes
        } catch (err) {
            console.log(err);
            return;
        }
    },
    getRecipeById: async (id) => {
        try {
            const response = await recipesInstance.get(`${id}/information?apiKey=${apiKey}`)
            return response.data
        } catch (err) {
            console.log(err);
            return;
        }
    }
}

export default spoonacularAPI;