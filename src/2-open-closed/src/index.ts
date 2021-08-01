import RegularSavingAccount from './principle/regular-saving-account';
import SalarySavingAccount from './principle/salary-saving-account';

const regular = new RegularSavingAccount(10);
console.log(regular.calculateTax());

const salary = new SalarySavingAccount(10);
console.log(salary.calculateTax());
