import { cleanArray } from './desafio03'

describe('Implement a method that cleans up unnecessary items from an array that was passed to the function (false, undefined, empty strings, zero, null)', () => {
    it('Should be recieve an "dirty" array and returns an clean array ', () => {
        expect(cleanArray([1, '', undefined, 0, 4, 'ola'])).toEqual([1, 4, 'ola'])
    })
    it('Should be return an array type', () => {
        expect(cleanArray([1, '', undefined, 0, 4, 'ola'])).toBeInstanceOf(Array)
    })
})