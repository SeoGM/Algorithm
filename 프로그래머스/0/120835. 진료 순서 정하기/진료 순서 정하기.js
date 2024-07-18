function solution(emergency) {
    const _emergency = [...emergency].sort((a, b) => b - a);
    return emergency.map(e => _emergency.indexOf(e) + 1);
}