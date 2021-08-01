import ISavingAccount from './saving-account.interface';

export default class RegularSavingAccount implements ISavingAccount {
  constructor(balance: number) {
    this.balance = balance;
  }

  calculateTax(): number {
    return (this.balance *= 0.2);
  }
}
