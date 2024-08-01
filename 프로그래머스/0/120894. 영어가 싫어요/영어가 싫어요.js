function solution(numbers) {
    const num_word = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine"];
    num_word.map((w, i) => {
        numbers = numbers.replaceAll(w, i)
    })
    return Number(numbers);
}