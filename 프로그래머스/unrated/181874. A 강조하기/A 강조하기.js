function solution(myString) {
    var answer = [];
    const str = myString.split('')
    for (let i = 0 ; i < str.length; i++) {
        if (str[i] === 'a' || str[i] === 'A') {
            answer.push(str[i].toUpperCase())
        } else {
            answer.push(str[i].toLowerCase())
        }
    }
    return answer.join('');
}