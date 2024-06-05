function solution(money) {
    const americano = 5500;
    
    const getCoffee = Math.floor(money / americano);
    const change = money - (americano * getCoffee);
    
    var answer = [getCoffee, change];
    return answer;
}