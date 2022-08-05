import { convertObject } from './desafio04'

describe('Implement a method that can convert an array of arrays into an object with key and value', () => {
    it('Should be recieve an array with two values and return an object', () => {
        expect(convertObject([["c", 2], ["d", 4]])).toEqual({ c: 2, d: 4 })
    })
    it('Should be return an object', () => {
        expect(typeof convertObject([["c", 2], ["d", 4]])).toBe('object')
    })
})