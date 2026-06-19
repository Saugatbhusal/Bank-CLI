const readline = require('readline');
const storage = require("./storage");
const rl = readline.createInterface({ input: process.stdin, output: process.stdout, prompt: ">" })

function startCli(bank) {
    rl.on('line', (line) => {
        console.log(line); // a clean string, e.g. "open Sam 1000"
        const [command, ...args] = line.trim().split(/\s+/);

        switch (command) {
            case "open":
                if (args[0] === "savings") {
                    bank.openAccount("savings", args[1], args[2]);

                } else if (args[0] === "checking") {
                    bank.openAccount("checking", args[1], args[2]);

                }
                break;
            case "deposit":
                bank.findAccount(args[0]).deposit(Number(args[1]))
                break;
            case "balance":
                console.log(bank.findAccount(args[0]).getBalance())
                break;
            case "history":
                console.log(bank.findAccount(args[0]).getHistory())

                break;
            case "transfer":
                console.log(bank.transfer(args[0], args[1], args[2]))
                break;
            case "withdraw":
                console.log(bank.findAccount(args[0]).withdraw(Number(args[1])))

                break;
            case "list":
                console.log(bank.listAccounts())

                break;
            case "save":
                storage.save("./data.json", bank.serialize())
                console.log("Saved");
                break;
            default:
                console.log("Unknown command")


        }

    });
}

module.exports = startCli