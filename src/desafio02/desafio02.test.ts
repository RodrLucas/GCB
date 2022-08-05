import { reverseArray } from './desafio02'

describe('Implement a method that inverts an array, without using native methods (.map(), .forEach() ...)', () => {
    it('Should recieve an array and returns reverse array', () => {
        expect(reverseArray([1,2,3,4])).toEqual([4,3,2,1])
    })
    it('Should return an array type', () => {
        expect(reverseArray([1,2,3,4]) instanceof Array ).toBe(true)
    })
})