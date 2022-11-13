import {combineReducers, createStore} from 'redux';
import recipesReducer from "../reducers/recipesReducer";

const reducers = combineReducers({
    recipes: recipesReducer,
})

const store = createStore(reducers);

export default store;