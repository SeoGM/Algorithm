function solution(box, n) {
    let answer = 1;
    [...box].map(b=>b=Math.floor(b/n)).map(b=>answer*=b)
    return answer;
}