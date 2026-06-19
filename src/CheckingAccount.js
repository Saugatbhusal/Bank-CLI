const Account = require('./Account')
const Transaction = require('./Transaction')

class CheckingAccount extends Account {
    constructor(owner, openingBalance, overdraftLimit = 100) {
        super(owner, openingBalance)
        this.overdraftLimit = overdraftLimit

    }

    withdraw(amount) {
        if (amount <= 0) throw new Error("Amount needs to be positive and greater than 0")
        if (amount > this.balance + this.overdraftLimit) {
            throw new Error(" You have exceeded the withddraw limit")
        }
        this.balance -= amount
        this.transaction.push(new Transaction("withdraw", amount))
        return this.balance
    }
}

module.exports = CheckingAccount