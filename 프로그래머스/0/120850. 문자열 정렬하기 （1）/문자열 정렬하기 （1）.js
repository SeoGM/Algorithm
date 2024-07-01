function solution(my_string) {
    const reg = /[^0-9]/g;
    return my_string.replace(reg, "").split("").map(Number).sort((a,b)=>a-b);
}