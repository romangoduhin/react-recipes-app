export const SET_IS_SEARCH_OPEN = 'SET_IS_SEARCH_OPEN';
export const SET_SEARCH_TYPE = 'SET_SEARCH_TYPE';

const initialState = {
    isSearchOpen: false,
    searchType: 'name',
}

const appReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'SET_IS_SEARCH_OPEN':
            return {
                ...state,
                isSearchOpen: action.isOpen
            }

        case 'SET_SEARCH_TYPE':
            return {
                ...state,
                searchType: action.searchType,
            }
        default :
            return state
    }
}

export default appReducer;