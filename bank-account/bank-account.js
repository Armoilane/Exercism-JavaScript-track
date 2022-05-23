export class BankAccount {
  constructor() {
    this.accountOpen = false
    this.accountBalance = 0
  }

  open() {
    if (this.accountOpen) {
      throw new ValueError
    }

    this.accountBalance = 0
    this.accountOpen = true
  }

  close() {
    if (!this.accountOpen) {
      throw new ValueError
    }

    this.accountOpen = false
  }

  deposit(amount) {
    if (amount < 0 || !this.accountOpen) {
      throw new ValueError
    }

    this.accountBalance += amount
  }

  withdraw(amount) {
    if (amount < 0 || amount > this.accountBalance || !this.accountOpen) {
      throw new ValueError
    }

    this.accountBalance -= amount
  }

  get balance() {
    if (!this.accountOpen) {
      throw new ValueError
    }

    return this.accountBalance
  }
}

export class ValueError extends Error {
  constructor() {
    super('Bank account error');
  }
}
