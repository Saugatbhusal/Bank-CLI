class Transaction {
    constructor(type, amount, description = "") {
        this.type = type;
        this.amount = amount;
        this.description = description;
        this.date = new Date.toISOString();
    }
}

module.exports = Transaction