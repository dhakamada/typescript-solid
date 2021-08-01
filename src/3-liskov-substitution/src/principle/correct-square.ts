import { Parallelograms } from './parallelograms';

export default class CorrectSquare extends Parallelograms {
  constructor(height: number, width: number) {
    if (height !== width)
      throw new Error('Square must be same height and width');
    super(height, width);
  }
}
