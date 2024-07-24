function solution(s) {
    var answer = '';
    [...s].map(c => {
        if(s.indexOf(c) === s.lastIndexOf(c)) {
            answer += c
        }
    })
    return answer.split("").sort().join("");
}