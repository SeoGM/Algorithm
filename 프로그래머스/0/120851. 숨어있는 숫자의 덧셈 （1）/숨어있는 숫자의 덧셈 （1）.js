function solution(my_string) {
    let answer = 0;
    my_string.split("").map(v=>{
        if(!isNaN(v)) answer += Number(v);
    });
    return answer;
}