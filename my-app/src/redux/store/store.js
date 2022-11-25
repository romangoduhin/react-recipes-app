import {applyMiddleware, combineReducers, createStore} from 'redux';
import recipesReducer from "../reducers/recipesReducer";
import appReducer from "../reducers/appReducer";
import thunkMiddleware from 'redux-thunk';

const reducers = combineReducers({
    recipes: recipesReducer,
    app: appReducer,
})

const store = createStore(reducers, applyMiddleware(thunkMiddleware));

export default store;