//Task 1: Creating a Counter with Closures
function createCounter() {
    let count = 0; // Private variable

    return {
        increment: function () {
            count++;
            console.log(`Current count: ${count}`);
        },
        decrement: function () {
            count--;
            console.log(`Current count: ${count}`);
        },
        getCount: function () {
            return count;
        }
    };
}

// Example Usage:
const counter = createCounter();
counter.increment(); // Output: Current count: 1
counter.increment(); // Output: Current count: 2
counter.decrement(); // Output: Current count: 1
//Explanation
/*Closure: The variable count is encapsulated within the createCounter function. The returned object (with increment, decrement, and getCount methods) forms a closure that retains access to count even after createCounter has finished executing.

Encapsulation: The count variable is not directly accessible from outside the function, ensuring it remains private.*/

//Question 2: Simulating Private Variables with Closures

function createBankAccount() {
    let balance = 0; // Private variable
    let transactionHistory = []; // Private variable for transaction history

    return {
        deposit: function (amount) {
            balance += amount;
            transactionHistory.push({ type: 'deposit', amount: amount });
            console.log(`Deposited: ${amount}`);
        },
        withdraw: function (amount) {
            if (amount > balance) {
                console.log('Insufficient balance');
            } else {
                balance -= amount;
                transactionHistory.push({ type: 'withdrawal', amount: amount });
                console.log(`Withdrawn: ${amount}`);
            }
        },
        checkBalance: function () {
            console.log(`Current balance: ${balance}`);
        },
        getTransactionHistory: function () {
            return transactionHistory.slice(); // Return a copy of the transaction history
        }
    };
}

// Example Usage:
const account = createBankAccount();
account.deposit(500); // Output: Deposited: 500
account.withdraw(200); // Output: Withdrawn: 200
account.withdraw(400); // Output: Insufficient balance
account.checkBalance(); // Output: Current balance: 300
console.log(account.balance); // Output: undefined (balance is private)

//Explanation
/*Private Variable: The balance and transactionHistory variables are private and not directly accessible from outside the createBankAccount function.

Closure: The methods returned by createBankAccount form a closure that retains access to these private variables, allowing controlled interaction (deposit, withdraw, check balance, and get transaction history) while keeping the variables encapsulated.

How Closures Ensure Privacy:

By defining variables within the function scope and returning methods that access those variables, the function creates a closure. This closure retains access to the function's scope even after the function has executed, ensuring that the variables are only accessible through the defined methods and not directly.*/