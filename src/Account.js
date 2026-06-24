const { v4: uuidv4 } = require('uuid');
const Transaction = require("./Transaction")

class Account {
    constructor(owner, openingBalance = 0) {
        this.id = uuidv4();
        this.owner = owner;
        this.balance = openingBalance;
        this.transactions = []
        if (openingBalance > 0) {
            this.transactions.push(new Transaction("deposit", openingBalance, "Opening balance"))
        }
    }

    deposit(amount) {
        if (amount <= 0) throw new Error("Ammount has to be greater then 0")
        this.balance += amount
        this.transactions.push(new Transaction("deposit", amount))
        return this.balance
    }

    withdraw(amount) {
        if (amount <= 0) throw new Error("Ammount needs to be positive")
        this.balance -= amount
        this.transactions.push(new Transaction("withdraw", amount))
        return this.balance
    }

    getBalance() { return this.balance }
    getHistory() { return [...this.transactions] }
}

module.exports = Account