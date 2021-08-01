// violation

/**
 * A violação ocorre por tratarmos que um quadrado "é um" (herança) retangulo
 * E no nosso cenário, ao usarmos o Quadrado para calcular a área, é apresentado um comportamento diferente ao esperado
 * e isso viola o princípio de Liskov em que a classe filha deve substituir uma classe base.
 */
import Square from './_violation/square';
import CorrectSquare from './principle/correct-square';

const calculateRectangleArea = retangle => {
  console.log(retangle.area());
};

calculateRectangleArea(new Square(10, 5));

// principle
const calculateParallelogram = p => {
  console.log(p.area());
};

calculateParallelogram(new CorrectSquare(6, 6));
