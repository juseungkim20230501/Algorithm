function solution(myString, pat) {
    var answer = 0;
    var arr = []
    const str = myString.split('')
    for (let i = 0; i < str.length; i++) {
        if (str[i] === 'A') {
            arr.push('B')
        } else {
            arr.push('A')
        }
    }
    if (arr.join('').includes(pat)) {
        answer = 1
    }
    return answer;
}