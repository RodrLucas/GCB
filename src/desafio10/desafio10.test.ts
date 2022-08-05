import { commonValuesArray } from './desafio10'

describe('Implement a method that finds common values ​​between two arrays.', () => {
    it('Should return a number that was found in both arrays', () => {
        expect(commonValuesArray({arr1: [6, 8], arr2: [8, 9]})).toEqual([8])
    })
})