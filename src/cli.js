const readline = require('readline');
const createBank = require('./Bank')
const bank = createBank()
const rl = readline.createInterface({ input: process.stdin, output: process.stdout, prompt: ">" })

rl.on('line', (line) => {
    console.log('Full line:', line); // a clean string, e.g. "open Sam 1000"
    const [command, ...args] = line.trim().split(/\s+/);

    switch (command) {
        case "open":
            if (args[0] === "savings") {
                bank.openAccount("savings", args[1], args[2])
            } else if (args[0] === "checking") {
                bank.openAccount("checking", args[1], args[2])
            }
            break;
        case "deposit":
            bank.findAccount(id).deposite(args[1])
            break;
        case "balance":
            accounts.find((accou) => accou.id === args[0]).getBalance(args[1])
            break;
        case "history":
            accounts.find((accou) => accou.id === args[0]).getHistory(args[1])
            break;
        case "transfer":


    }

});