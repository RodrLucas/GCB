// Encontrar valores comuns de arrays
// Implemente um método que encontre os valores comuns entre dois arrays.

interface commonValuesArrayProps {
    arr1: number[],
    arr2: number[]
}

export function commonValuesArray({arr1, arr2}: commonValuesArrayProps) {
    let array: number[] = []
    arr1.filter(function (element) {
        if (arr2.indexOf(element) !== -1) { // If it finds a value in both arrays
            array.push(element)
        }
    });
    return array
}

commonValuesArray({arr1: [6, 8], arr2: [8, 9]})

module.exports = { commonValuesArray }
