import { nestingArray } from './desafio08'

describe('Implement a method that removes nests from an array of arrays to a single array.', () => {
    it('Should be return an array without nesting', () => {
        expect(nestingArray([1, 2, [3], [4, 5]])).toEqual([ 1, 2, 3, 4, 5 ])
    })
    it('Should return the return type ', () => {
        expect(nestingArray([1, 2, [3], [4, 5]])).toBeInstanceOf(Array)
    })
    it('Should return the array length', () => {
        expect(nestingArray([1, 2, [3], [4, 5]])).toHaveLength(5)
    })
    it('Must return what is not expected', () => {
        const expected = [ 1, 2, 3, 4, 5, 6 ]
        expect(nestingArray([1, 2, [3], [4, 5]])).toEqual(expect.not.arrayContaining(expected))
    })
})