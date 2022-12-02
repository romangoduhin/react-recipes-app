export const setToLocStor = (key, data) => {
    localStorage.setItem(key, JSON.stringify(data))
}

export const getFromLocStor = (key) => {
    return JSON.parse(localStorage.getItem(key))
}