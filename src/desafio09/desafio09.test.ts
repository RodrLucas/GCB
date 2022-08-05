import { partsArray } from './desafio09'

describe('Implement a method that divides an array by an amount passed by parameter.', () => {
    it('Should receive an array with array and a parameter to split the array', () => {
        expect(partsArray({arr: [1, 2, 3, 4, 5], qtd: 2})).toStrictEqual([ [ 1, 2 ], [ 3, 4 ], [ 5 ] ])
    })
})