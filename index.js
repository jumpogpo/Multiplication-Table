const prompt = require("prompt-sync")({ sigint: true });

console.clear()

process.stdout.write(
    String.fromCharCode(27) + "]0; Multiplication Table" + String.fromCharCode(7)
);

function StartProgram() {
    const InputNumber = prompt('Please Enter the number: ');

    for (let i = 1; i <= 12; i++) {
        console.log(`${InputNumber} x ${String(i)} =`, InputNumber * i)
    }

    console.log()
    StartProgram()
}

StartProgram()