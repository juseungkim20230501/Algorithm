function solution(a, b) {
    if (parseInt(a.toString() + b.toString()) > 2*a*b) {
        return parseInt(a.toString() + b.toString())
    } else {
        return 2*a*b
    }
}