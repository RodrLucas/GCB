// Remover aninhamentos de um array
// Implemente um método que remova os aninhamentos de um array de arrays para um array unico.

type parameterProps = any[]

export function nestingArray(array: parameterProps) {
    const arrayWithoutNesting = array.flat()
    return arrayWithoutNesting
}

nestingArray([1, 2, [3], [4, 5]])

module.exports = { nestingArray }
