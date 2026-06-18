class Account {
    constructor(owner, openingBalance = 0) {
        this.id = id();
        this.owner = owner;
        this.balance = openingBalance;
        this.transaction = []
        if (openingBalance > 0) {
            this.transaction.push([new Transaction("deposit", openingBalance, "Opening balance")])
        }
    }

    deposite(amount) {
        if (amount <= 0) throw new Error("Ammount has to be greater then 0")
        this.balance += amount
        this.transaction.push(new Transaction("deposit", amount))
        return this.balance
    }

    withdraw(amount) {
        if (amount <= 0) throw new Error("Ammount needs to be positive")
        this.balance -= amount
        this.transaction.push(new Transaction("withdraw", amount))
        return balance
    }

    getBalance() { return this.balance }
    getHistory() { return [...this.transaction] }
}