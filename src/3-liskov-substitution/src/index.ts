// violation

/**
 * A violação ocorre porque tratarmos que um quadrado "é um" (herança) retangulo
 * E no nosso cenário, ao usarmos o Quadrado para calcular a área (linha 15), é apresentado um comportamento diferente ao esperado
 * porque deveria apresentar o resultado 50, porém retorna 25
 * Isso viola o princípio de Liskov, em que a classe filha deve substituir uma classe base.
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
