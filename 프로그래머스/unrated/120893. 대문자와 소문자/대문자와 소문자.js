function solution(my_string) {
    var answer = [];
    const str = my_string.split('')
    for (let i = 0; i < str.length; i++) {
        if (str[i] === str[i].toUpperCase()) {
            answer.push(str[i].toLowerCase())
        } else {
            answer.push(str[i].toUpperCase())
        }
    }
    return answer.join('');
}