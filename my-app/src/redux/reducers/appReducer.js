import {getFromLocStor} from "../../assets/localStorage";
import {SET_IS_SEARCH_OPEN, SET_SEARCH_TYPE, SET_IS_BURGER_MENU_OPEN} from "../actions/appActions";

const searchTypeStorage = getFromLocStor('searchType')

const initialState = {
    isSearchOpen: false,
    isBurgerMenuOpen: false,
    searchType: searchTypeStorage ? searchTypeStorage : 'name',
}

const appReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_IS_SEARCH_OPEN:
            return {
                ...state,
                isSearchOpen: action.isOpen
            }
        case SET_IS_BURGER_MENU_OPEN:
            return {
                ...state,
                isBurgerMenuOpen: action.isOpen
            }

        case SET_SEARCH_TYPE:
            return {
                ...state,
                searchType: action.searchType,
            }
        default :
            return state
    }
}

export default appReducer;