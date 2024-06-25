function solution(strlist) {
    var answer = [];
    strlist.map(str=>answer.push(str.split("").length));
    return answer;
}