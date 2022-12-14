export const SET_IS_SEARCH_OPEN = 'SET_IS_SEARCH_OPEN';
export const SET_SEARCH_TYPE = 'SET_SEARCH_TYPE';
export const SET_IS_BURGER_MENU_OPEN = 'SET_IS_BURGER_MENU_OPEN';

export const setIsSearchOpen = (isOpen) => {
    return {
        type: 'SET_IS_SEARCH_OPEN',
        isOpen
    }
}

export const setIsBurgerMenuOpen = (isOpen) => {
    return {
        type: 'SET_IS_BURGER_MENU_OPEN',
        isOpen
    }
}

export const setSearchTypeAction = (searchType) => {
    return {
        type: 'SET_SEARCH_TYPE',
        searchType: searchType
    }
}

