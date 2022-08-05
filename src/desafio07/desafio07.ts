// Igualar arrays
// Implemente um método que compare a igualdade de dois arrays e retorne um valor booleano.

interface arraysEqualsProps {
    a: number[]
    b: number[]
}

export function arraysEquals({ a, b }: arraysEqualsProps) {
    if (a.length === b.length && a.every((v, i) => v === b[i])) return true
    else return false
}

arraysEquals({ a: [1, 2, 3, 4], b: [1, 2, 3, 4] })
arraysEquals({ a: [1, 2, 3, 4], b: [1, 2, 3, 5] })

module.exports = { arraysEquals }