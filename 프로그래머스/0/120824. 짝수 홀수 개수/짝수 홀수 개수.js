function solution(num_list) {
    let even = 0, odd = 0;
    [...num_list].map(n=>n%2===0?even++:odd++);
    return [even,odd];
}