export const formatToQuery = (value) => {
    return value.replaceAll(' ', ',+');
}

export const formatToNormal = (query) => {
    return query.replaceAll(',+', ' ');
}