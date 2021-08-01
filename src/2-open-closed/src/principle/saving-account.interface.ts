export default interface ISavingAccount {
  balance: number;

  calculateTax(): number;
}
