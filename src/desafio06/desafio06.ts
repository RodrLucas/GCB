// Novo array sem valores duplicados
// Implemente um método que retorne um array, sem valores duplicados.

type arrayWithoutDuplicatesProps = number[]

export function arrayWithoutDuplicates(array: arrayWithoutDuplicatesProps) {
    const newArray = [...new Set(array)]
    return newArray
}

arrayWithoutDuplicates([1, 2, 3, 3, 2, 4, 5, 4, 7, 3])

module.exports = { arrayWithoutDuplicates }