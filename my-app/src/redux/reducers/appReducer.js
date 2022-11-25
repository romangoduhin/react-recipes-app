export const SET_IS_SEARCH_OPEN = 'SET_IS_SEARCH_OPEN';

const initialState = {
    isSearchOpen: false,
}

const appReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'SET_IS_SEARCH_OPEN':
            return {
                ...state,
                isSearchOpen: action.isOpen
            }
        default :
            return state
    }
}

export default appReducer;