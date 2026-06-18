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
}