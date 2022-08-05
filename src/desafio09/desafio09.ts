// Dividir array
// Implemente um método que divida um array por uma quantidade passada por parâmetro.

interface partsArrayProps {
    arr: number[],
    qtd: number
}

export function partsArray({arr, qtd}: partsArrayProps) {
    let parts = [], i = 0, n = arr.length
    while (i < n) {
        parts.push(arr.slice(i, i += qtd))
    }
    return parts
}

partsArray({arr: [1, 2, 3, 4, 5], qtd: 2})

module.exports = { partsArray }
