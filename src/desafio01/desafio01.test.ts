import { createArray } from './desafio01'

describe('Implement a method that can create an array based on the values ​​that have been passed to it.', () => {
    it('Should be receive the quantity and the item to be printed', () => {
        expect(createArray({qtd: 2, value: 'i'})).toEqual(['i', 'i'])
    })
    it('Should be return an array type', () => {
        expect(Array.isArray(createArray({qtd: 2, value: 'i'}))).toBe(true)
    })
})