// Inverter array
// Implemente um método que inverta um array, sem utilizar métodos nativos (.map(), .forEach() ...).

type reverseArrayProps = number[]

export function reverseArray(array: reverseArrayProps) {
    const newArray: number[] = [];
    for (let i = array.length - 1; i >= 0; i--) {
        newArray.push(array[i]);
    }
    return newArray
}

reverseArray([1,2,3,4])

module.exports = { reverseArray }