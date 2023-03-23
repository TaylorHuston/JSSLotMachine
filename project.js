
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

const depositAmount = deposit();