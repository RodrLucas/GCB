import { arrayWithoutDuplicates } from './desafio06'

describe('Implement a method that returns an array, with no duplicate values.', () => {
    it('Should be recives an array with no duplicate values', () => {
        expect(arrayWithoutDuplicates([1, 2, 3, 3, 2, 4, 5, 4, 7, 3])).toEqual([1, 2, 3, 4, 5, 7])
    })
    it('Should be return the array length number ', () => {
        expect(arrayWithoutDuplicates([1, 2, 3, 3, 2, 4, 5, 4, 7, 3])).toHaveLength(6)
    })
})