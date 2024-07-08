function solution(num, k) {
    const index = String(num).indexOf(String(k));
    return index !== -1 ? index + 1 : -1
}