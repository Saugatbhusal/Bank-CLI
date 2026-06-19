const SavingsAccount = require('./SavingsAccount')
const CheckingAccount = require('./CheckingAccount')
const Account = require('./Account')
const Transaction = require('./Transaction')

function createBank() {
    const accounts = []

    return {
        openAccount(type, owner, openingBalance) {
            let account
            if (type === "savings") {
                account = new SavingsAccount(owner, openingBalance)
                console.log(`Account created! ID: ${account.id}`);
            } else if (type === "checking") {
                account = new CheckingAccount(owner, openingBalance)
                console.log(`Account created! ID: ${account.id}`);
            } else {
                account = new Account(owner, openingBalance)
                console.log(`Account created! ID: ${account.id}`);
            }
            accounts.push(account)
            return account
        },

        findAccount(id) {
            return accounts.find((account) => account.id === id)
        }

        ,
        transfer(formId, toId, amount) {
            const form = accounts.find((a) => a.id === formId)
            const to = accounts.find((a) => a.id === toId)
            if (!from || !to) {

                throw new Error("Account not fount")
            }
            form.withdraw(amount)
            to.deposit(amount)

        },
        listAccounts() {
            return accounts.map((a) => ({
                id: a.id,
                owner: a.owner,
                balance: a.balance,
                type: a.constructor.name //points back to the class that created it 

            }))
        },
        serialize() {
            return accounts.map((a) => ({...a, type: a.constructor.name }));
        },
        load(data) {
            data.forEach((row) => {
                const acc = this.openAccount(row.type.replace("Account", "").toLowerCase(),
                    row.owner, 0);
                acc.balance = row.balance;
                acc.transactions = row.transactions;
                acc.id = row.id;
            });
        }
    }
}

module.exports = createBank