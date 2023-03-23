
// function deposit() {
    
//     return 1
// }

const prompt = require('prompt-sync')();

const deposit = () => {
    while(true)
    {
        const depositAmount = prompt('How much would you like to deposit? $');
        const numberDeposit = parseFloat(depositAmount);

        if (isNaN(numberDeposit) || numberDeposit <= 0) {
            console.log('Please enter a valid amount.');
        } else {
            return numberDeposit;
        }
    }
}


const getNumberOfLines = () => {
    while(true)
    {
        const lines = prompt('Enter the number of lines to bet on: ');
        const numLines = parseFloat(lines);

        if (isNaN(numLines) || numLines <= 0 || numLines > 3) {
            console.log('Please enter a valid number of lines');
        } else {
            return numLines;
        }
    }
}


const depositAmount = deposit();
const numLines = getNumberOfLines();