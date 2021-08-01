import ISavingAccount from './saving-account.interface';

export default class SalarySavingAccount implements ISavingAccount {
  constructor(balance: number) {
    this.balance = balance;
  }

  calculateTax(): void {
    return (this.balance *= 0.5);
  }
}
