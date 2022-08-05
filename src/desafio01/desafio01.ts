//Array de elementos por repetições
// Implemente um método que possa criar um array baseado nos valores que foram passados para ele.

interface IcrateArrayProps {
    qtd: number
    value: string
}

export function createArray({qtd, value}: IcrateArrayProps) {
    const array: string[] = []
    if (qtd > 0) {
        while (array.length < qtd)
            array.push(value)
    }
    return array
}

createArray({qtd: 2, value: 'i'})
