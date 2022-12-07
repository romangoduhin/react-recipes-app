import axios from "axios";

// const apiKey = "90e4bb97a1c848e685926a30c584ad82";
 const apiKey = "1c576e6023e2463b89b4c0d05608878b";
// const apiKey = "22defad3dc6646869ea114e244a87882";

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
        }
    },
    getRecipeById: async (id) => {
        try {
            const response = await recipesInstance.get(`${id}/information?apiKey=${apiKey}`)
            return response.data
        } catch (err) {
            console.log(err);
        }
    },
    getRecipesByName: async (query, count) => {
        try {
            const response = await recipesInstance.get(`complexSearch?query=${query}&apiKey=${apiKey}&number=${count}`)
            return response.data
        } catch (err) {
            console.log(err)
        }
    },
    getRecipesByIngredients: async (query, count) => {
        try {
            const response = await recipesInstance.get(`findByIngredients?ingredients=${query}&apiKey=${apiKey}&number=${count}`)
            return response.data
        } catch (err) {
            console.log(err)
        }
    },
}

export default spoonacularAPI;