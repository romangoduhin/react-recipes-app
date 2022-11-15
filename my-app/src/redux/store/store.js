import {applyMiddleware, combineReducers, createStore} from 'redux';
import recipesReducer from "../reducers/recipesReducer";
import thunkMiddleware from 'redux-thunk';

const reducers = combineReducers({
    recipes: recipesReducer,
})

const store = createStore(reducers, applyMiddleware(thunkMiddleware));

export default store;