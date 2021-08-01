export abstract class Parallelograms {
  constructor(private height: number, private width: number) {}

  area(): number {
    return this.height * this.width;
  }
}
