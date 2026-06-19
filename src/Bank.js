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
            } else if (type === "checking") {
                account = new CheckingAccount(owner, openingBalance)
            } else {
                account = new Account(owner, openingBalance)
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
    }
}

module.exports = createBank