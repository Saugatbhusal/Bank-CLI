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
            bank.findAccount(id).getBalance()
            break;
        case "history":
            bank.findAccount(id).getHistory()
            break;
        case "transfer":
            bank.transfer(args[0], args[1], args[2])
            break;
        case "wirhdraw":
            bank.findAccount(id).withdraw(args[1])
            break;
        case "list":
            bank.listAccounts()
            break;
        default:
            console.log("Unknown command")


    }

});