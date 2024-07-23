function solution(array, n) {
  return array.reduce((a, b) => {
    const diffA = Math.abs(a - n);
    const diffB = Math.abs(b - n);
    
    if (diffA === diffB) {
      return a < b ? a : b; // 차이가 같다면 더 작은 수를 반환
    } else {
      return diffA < diffB ? a : b; // 차이가 작다면 그 수를 반환
    }
  });
}