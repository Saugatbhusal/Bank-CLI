# Bank CLI

A command-line banking application built with Node.js that lets you manage accounts and transactions from the terminal.

## Features

- Create bank accounts with an optional opening balance
- Deposit and withdraw funds
- View transaction history
- Persistent data storage via `data.json`

## Project Structure

```
Banking app/
├── index.js          # Entry point
├── src/
│   └── Account.js    # Account class definition
├── data.json         # Persistent account data
└── package.json
```

## Getting Started

### Prerequisites

- Node.js v14+

### Installation

```bash
npm install
```

### Run

```bash
node index.js
```

Or with auto-reload during development:

```bash
npx nodemon index.js
```

## Usage

The CLI guides you through managing your bank accounts interactively. Follow the on-screen prompts to:

1. Create a new account
2. Deposit or withdraw money
3. Check your balance and transaction history

## License

ISC
