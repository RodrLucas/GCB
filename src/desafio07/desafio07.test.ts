import { arraysEquals } from './desafio07'

describe('Implement a method that compares two arrays for equality and returns a boolean value.', () => {
    it('Should be return a boolean value true', () => {
        expect(arraysEquals({a: [1, 2, 3, 4], b: [1, 2, 3, 4]})).toBeTruthy()
    })
    it('Should be return a boolean value false', () => {
        expect(arraysEquals({a: [1, 2, 3, 4], b: [1, 2, 3, 5]})).toEqual(false)
    })
    it('Should be return if the function returns a boolean value', () => {
        expect(typeof arraysEquals({a: [1, 2, 3, 4], b: [1, 2, 3, 5]})).toBe('boolean')
    })
})