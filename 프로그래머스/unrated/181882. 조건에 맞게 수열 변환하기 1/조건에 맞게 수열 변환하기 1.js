function solution(arr) {
    return arr.map(a => {
        if(a >= 50 && a % 2 === 0) return a/2
        if(a <= 50 && a % 2 !== 0) return a*2
        return a
    })
}