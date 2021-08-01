import IDrivable from './drivable.interface';
import IFullPowered from './full-powered.interface';
import ITurnable from './turnable.interface';

export default class Car implements IDrivable, IFullPowered, ITurnable {
  turnOn(): void {
    console.log(`Car - turn on`);
  }
  accelerate(): void {
    console.log(`Car - accelerate`);
  }
  break(): void {
    console.log(`Car - break`);
  }
  fillUp(): void {
    console.log(`Car - fill up`);
  }
}
