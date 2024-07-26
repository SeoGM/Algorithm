function solution(s) {
    let result = 0;
    let before = 0;
    
    s.split(" ").map(str => {
        if(str === "Z") {
            result -= before;
        } else {
            result += Number(str);
            before = Number(str);
        }
    })
    return result;
}