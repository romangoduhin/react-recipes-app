import axios from "axios";

const apiKey = "90e4bb97a1c848e685926a30c584ad82";

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
    }
}

export default spoonacularAPI;