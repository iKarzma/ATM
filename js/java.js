// ATM class to handle operations
class ATM {
  constructor() {
    this.balance = 1000; // Initial balance
    this.pin = '1234'; // Default PIN
    this.isAuthenticated = false;
  }

  // Authenticate user with PIN
  authenticate() {
    const enteredPin = prompt('Enter your PIN:');
    if (enteredPin === this.pin) {
      this.isAuthenticated = true;
      alert('Authentication successful!');
    } else {
      alert('Incorrect PIN. Please try again.');
    }
  }

  // Display balance
  checkBalance() {
    if (this.isAuthenticated) {
      alert(`Your current balance is: $${this.balance}`);
    } else {
      alert('Please authenticate first.');
    }
  }

  // Deposit money
  deposit() {
    if (this.isAuthenticated) {
      const amount = parseFloat(prompt('Enter amount to deposit:'));
      if (amount > 0) {
        this.balance += amount;
        alert(
          `$${amount} deposited successfully. New balance: $${this.balance}`
        );
      } else {
        alert('Invalid amount. Please enter a positive number.');
      }
    } else {
      alert('Please authenticate first.');
    }
  }

  // Withdraw money
  withdraw() {
    if (this.isAuthenticated) {
      const amount = parseFloat(prompt('Enter amount to withdraw:'));
      if (amount > 0 && amount <= this.balance) {
        this.balance -= amount;
        alert(
          `$${amount} withdrawn successfully. New balance: $${this.balance}`
        );
      } else {
        alert('Invalid amount or insufficient funds.');
      }
    } else {
      alert('Please authenticate first.');
    }
  }

  // Main menu
  menu() {
    let choice;
    do {
      choice = prompt(
        'Welcome to the ATM!\n1. Authenticate\n2. Check Balance\n3. Deposit\n4. Withdraw\n5. Exit\nPlease enter your choice:'
      );
      switch (choice) {
        case '1':
          this.authenticate();
          break;
        case '2':
          this.checkBalance();
          break;
        case '3':
          this.deposit();
          break;
        case '4':
          this.withdraw();
          break;
        case '5':
          alert('Thank you for using the ATM. Goodbye!');
          break;
        default:
          alert('Invalid choice. Please try again.');
      }
    } while (choice !== '5');
  }
}

// Create an instance of ATM and start the menu
const atm = new ATM();
atm.menu();
