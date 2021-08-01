/**
 * O princípio é violado se precisamos criar um novo tipo de SavingAccount
 * em que precisaremos alterar o método `calculateTax` adicionando mais um if
 * Isso significa que esse método está sempre aberto para modificações
 */

class enum AccountEnum {
  REGULAR,
  SALARY
}

export class SavingAccount {
  constructor(private balance: number) {}

  calculateTax(accountEnum: AccountEnum): void {
    if (accountEnum === AccountEnum.REGULAR) {
      this.balance = this.balance * 0.2
    } else if (accountEnum === AccountEnum.SALARY) {
      this.balance = this.balance * 0.4
    }
  }
}