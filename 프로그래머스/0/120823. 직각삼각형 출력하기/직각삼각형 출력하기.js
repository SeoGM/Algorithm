const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let input = [];
let output = "";
rl.on('line', function (line) {
    input = line.split(' ');
}).on('close', function () {
    for (let i = 0; i < Number(input[0]); i++) {
        for ( let j = 0; j <= i; j++) {
            output += "*";
        }
        output += "\n";
    }
    console.log(output)
});

