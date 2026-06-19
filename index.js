const createBank = require('./src/Bank');
const storage = require('./src/storage')();
const startCli = require('./src/cli');

const bank = createBank();
const data = storage.load('./data.json')
bank.load(data)

startCli(bank)