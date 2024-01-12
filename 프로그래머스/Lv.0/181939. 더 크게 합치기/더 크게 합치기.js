function solution(a, b) {
const p = Number(a.toString() + b.toString())
const n = Number(b.toString() + a.toString())

return p > n ? p : n
}