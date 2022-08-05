// Converter array em objeto
// Implemente um método que possa converter um array de arrays em um objeto com chave e valor

type valuesProps = (string | number)[]

export function convertObject(values: valuesProps[]) {
    const array = values
    const newArray = Object.fromEntries(array)
    return newArray
}

convertObject([["c",2],["d",4]])

module.exports = { convertObject }