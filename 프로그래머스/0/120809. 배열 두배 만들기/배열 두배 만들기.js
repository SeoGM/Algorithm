const solution = (numbers) => {
    var answer = [];
    
    if(numbers.length < 0 && numbers.length > 10000) {
        return 0;
    }
    numbers.map(number => answer.push(validateNumber(number, -10000, 10000) * 2));
    
    return answer;
}

const validateNumber = (number, min, max) => {
    return (number >= min && number <= max ) ? number : 0;
}