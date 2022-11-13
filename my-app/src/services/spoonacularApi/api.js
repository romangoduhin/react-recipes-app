import axios from "axios";

const apiKey = "1c576e6023e2463b89b4c0d05608878b";

const recipesInstance = axios.create({
    baseURL: 'https://api.spoonacular.com/recipes/',
});

const spoonacularAPI = {
    getRandomRecipes: async (count) => {
        const response = await recipesInstance.get(`random?number=${count}&apiKey=${apiKey}`)
        return response.data.recipes
    }
}

export default spoonacularAPI;