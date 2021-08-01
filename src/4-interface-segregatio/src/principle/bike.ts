import IDrivable from './drivable.interface';

export default class Bike implements IDrivable {
  accelerate(): void {
    console.log(`Bike - accelerate`);
  }
  break(): void {
    console.log(`Bike - break`);
  }
}
