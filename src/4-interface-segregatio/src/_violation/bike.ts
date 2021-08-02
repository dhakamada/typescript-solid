import IVehicle from './vehicle.interface';

/**
 * A violação de interface segregation ocorre pelo motivo da classe Bike ser obrigada a implementar
 * comportamentos que não são de responsabilidade da bike.
 * Quero dizer, que a interface IVehicle possui mais responsabilidades/comportamentos que podem ser segregadas
 */

export default class Bike implements IVehicle {
  turnOn(): void {
    // Bike convencional não precisa ligar
  }
  accelerate(): void {
    console.log(`Bike - accelerate`);
  }
  break(): void {
    console.log(`Bike - break`);
  }
  fillUp(): void {
    // Bike convencional não precisa encher o tanque
  }
}
