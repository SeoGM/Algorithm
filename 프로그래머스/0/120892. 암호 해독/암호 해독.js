function solution(cipher, code) {
    const _cipher = cipher.split("");
    let result = [];
    for(let i=code-1; i < _cipher.length; i += code ) {
        result += _cipher[i];
    }
    return result;
}