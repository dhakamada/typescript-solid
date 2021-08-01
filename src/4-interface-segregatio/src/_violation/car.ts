import IVehicle from './vehicle.interface';

export default class Car implements IVehicle {
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
