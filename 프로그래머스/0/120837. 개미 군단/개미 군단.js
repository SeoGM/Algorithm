function solution(hp) {
    let answer = 0;
    const ants = [5, 3, 1];
    ants.map(ant=>{
        answer += Math.floor(hp / ant);
        hp = hp % ant;        
    })
    
    return answer;
}