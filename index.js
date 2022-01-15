const prompt = require("prompt-sync")({ sigint: true });

console.clear()

process.stdout.write(
    String.fromCharCode(27) + "]0; Multiplication Table" + String.fromCharCode(7)
);

function StartProgram() {
    const InputNumber = prompt('Please enter the number: ');

    if (!isNaN(InputNumber)) {
        for (let i = 1; i <= 12; i++) {
            console.log(`${InputNumber} x ${String(i)} =`, InputNumber * i)
        }
    }else {
        console.log('Please enter the number not letter!!')
    }

    console.log()
    StartProgram()
}

StartProgram()