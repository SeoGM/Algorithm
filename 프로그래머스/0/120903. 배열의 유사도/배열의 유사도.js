function solution(s1, s2) {
    let answer = 0;
    s1.map((v1) => {
        s2.map(v2=>v1===v2&&answer++)
    })
    
    return answer;
}