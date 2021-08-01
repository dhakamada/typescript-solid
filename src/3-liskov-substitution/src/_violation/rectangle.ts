export default class Rectangle {
  constructor(private height: number, private width: number) {}

  area(): number {
    return this.height * this.width;
  }
}
