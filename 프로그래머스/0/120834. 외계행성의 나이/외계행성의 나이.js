function solution(age) {
    return [...String(age)].map(c => String.fromCharCode(Number(c) + 97)).join("");
}