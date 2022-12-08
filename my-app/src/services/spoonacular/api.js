import axios from "axios";

const apiKey = "5e9a482b0a7548859ad9359f1f7f2fb6";


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