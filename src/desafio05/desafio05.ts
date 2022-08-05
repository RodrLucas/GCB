// Filtrar array
// Implemente um método que retorne um array filtrado, sem os itens passados por parâmetro.

interface parametersProps {
    array: number[]
    par: number[]
}

export function filterArray({array, par}: parametersProps) {
    const parNumbers = par.forEach(parNumber => {
        array.forEach(arrNumber => {
            //If the array number is the same as the parameter number, delete the number (arrNumber) from the array, that way only the numbers different from the parameters are left
            if (arrNumber === parNumber) {
                return array.splice(array.indexOf(arrNumber), 1)
            }
        })
    })
    return array
}

filterArray({array: [5, 4, 3, 2, 5], par: [5, 3]})

module.exports = { filterArray }