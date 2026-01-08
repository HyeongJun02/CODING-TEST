const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let input = [];

rl.on('line', function (line) {
    input = [line];
}).on('close',function(){
    const regex = /[a-z]/;
    str = input[0];
    console.log(str.split("")
                .map((ch) => regex.test(ch) ? ch.toUpperCase() : ch.toLowerCase())
                .join(""));
});