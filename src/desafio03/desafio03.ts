// Limpar array
// Implemente um método que limpe os itens desnecessários de um array que foi passado para a função (false, undefined, strings vazias, zero, null)

type cleanArrayProps = any[]


export function cleanArray(values: cleanArrayProps) {
    const array = values

    let cleanArray = array.filter(function (itens) {
        return itens;
    });

    return cleanArray
}

cleanArray([1, '', undefined, 0, 4, 'ola'])

module.exports = { cleanArray }