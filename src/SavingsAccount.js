const Account = require('./Account')
const Transaction = require('./Transaction')


class SavingsAccount extends Account {
    constructor(owner, openingBalance, interestRate) {
        super(owner, openingBalance);
        this.interestRate = interestRate;

    }
    addInterest() {
        const interest = this.balance * this.interestRate
        this.balance += interest
        this.transaction.push(new Transaction("interest", interest, "Interest"))
        return this.balance
    }
}

module.exports = SavingsAccount