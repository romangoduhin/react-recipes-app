export const arrayDivisor = (array, subArraySize) => {
    let newArray = [];
    for (let i = 0; i < Math.ceil(array.length / subArraySize); i++) {
        newArray[i] = array.slice((i * subArraySize), (i * subArraySize) + subArraySize);
    }
    return newArray;
}