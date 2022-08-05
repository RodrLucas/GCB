import { filterArray } from './desafio05'

describe('Implement a method that returns a filtered array, without the items passed by parameter', () => {
    it('Should be recieves an array with array and a filter parameter', () => {
        expect(filterArray({ array: [5, 4, 3, 2, 5], par: [5, 3] })).toEqual([4, 2])
    })
    it('Should be return an array type', () => {
        expect(filterArray({ array: [5, 4, 3, 2, 5], par: [5, 3] })).toBeInstanceOf(Array)
    })
})