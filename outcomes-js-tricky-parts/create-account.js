function createAccount(pin, amount = 0) {
    return {
        checkBalance(newPin) {
            if (pin !== newPin) return 'Invalid PIN.';
            return `$${amount}`;
        },
        deposit(newPin, depositAmount) {
            if (pin !== newPin) return 'Invalid PIN.';
            amount += depositAmount;
            return `Succesfully deposited $${depositAmount}. Current balance: $${amount}.`
        },
        withdraw(newPin, withdrawAmount) {
            if (pin !== newPin) return 'Invalid PIN.';
            if (withdrawAmount > amount) {
                return "Withdrawal amount exceeds account balance. Transaction cancelled.";
            }
            amount -= withdrawAmount; 
            return `Succesfully withdrew $${withdrawAmount}. Current balance: $${amount}.`;
        },
        changePin(OldPin, updatedPin) {
            if (pin !== OldPin) return 'Invalid PIN.';
            pin = updatedPin;
            return "PIN successfully changed!";
        }
    }
}

module.exports = { createAccount };
