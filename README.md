# Bank CLI

A command-line banking application built with Node.js. Demonstrates core JavaScript concepts including OOP, inheritance, closures, and event-driven programming.

## Concepts Demonstrated

- **OOP & Inheritance** — `SavingsAccount` and `CheckingAccount` extend a base `Account` class
- **Closure pattern** — `createBank()` uses a factory function with a private `accounts` array, inaccessible from outside
- **Event-driven CLI** — `readline` module listens for user input line by line
- **Persistent storage** — accounts are serialized to JSON and reloaded on startup

## Installation

```bash
npm install
```

## Usage

```bash
node index.js
```

## Commands

| Command | Example | Description |
|--------|---------|-------------|
| `open savings <name> <balance> <interestRate>` | `open savings Sam 1000 0.05` | Open a savings account |
| `open checking <name> <balance>` | `open checking Sam 1000` | Open a checking account |
| `deposit <id> <amount>` | `deposit abc-123 500` | Deposit into an account |
| `withdraw <id> <amount>` | `withdraw abc-123 200` | Withdraw from an account |
| `transfer <fromId> <toId> <amount>` | `transfer abc-123 def-456 100` | Transfer between accounts |
| `balance <id>` | `balance abc-123` | Check account balance |
| `history <id>` | `history abc-123` | View transaction history |
| `addInterest <id>` | `addInterest abc-123` | Apply interest (savings only) |
| `list` | `list` | List all accounts |
| `save` | `save` | Save accounts to disk |
| `quit` | `quit` | Exit the app |

## Project Structure

```
src/
  Account.js          # Base account class
  SavingsAccount.js   # Extends Account, adds interest
  CheckingAccount.js  # Extends Account, adds overdraft limit
  Transaction.js      # Transaction record
  Bank.js             # Factory function managing all accounts
  cli.js              # CLI interface using readline
  storage.js          # File read/write
index.js              # Entry point
```
