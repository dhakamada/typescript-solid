## S.O.L.I.D

DRY - Don't repeat yourself

#### Princípios

São os alicerces da norma, são o seu fundamento em essência, são o refúgio em que a norma encontra sustentação para racionalizar a sua legitimação, são a base de onde se extrai o norte a ser seguido por um ordenamento

Se você se guiar pelos princípios, por traz dos vários padrões de projeto. Você vai saber quando e em que momento deve aplicar.

### O que é S.O.L.I.D ?

O S.O.L.I.D é um acrônimo que representa cinco princípios da programação orientada a objetos que facilitam no desenvolvimento de softwares e foi teorizado pelo Uncle Bob (Robert C. Martin) por volta do ano 2000. O autor Michael Feathers foi responsável pela criação do acrônimo:

#### Os 5 princípios:

- **[S]** - Single Responsiblity Principle (Princípio da Responsabilidade Única)
- **[O]** - Open-Closed Principle (Princípio do Aberto/Fechado)
- **[L]** - Liskov Substitution Principle (Princípio da Substituição de Liskov)
- **[I]** - Interface Segregation Principle (Princípio da Segregação de Interfaces)
- **[D]** - Dependency Inversion Principle (Princípio da Inversão de Dependências)

#### Benefícios

- Seja fácil de se manter, adaptar e se ajustar às alterações de escopo;
- Seja testável e de fácil entendimento;
- Seja extensível para alterações com o menor esforço necessário;
- Que forneça o máximo de reaproveitamento;
- Que permaneça o máximo de tempo possível em utilização.

#### Evita

- Rigidez: mudanças simples em um único módulo de um projeto resultam em alterações de várias classes de outros módulos, consumindo uma grande quantidade de tempo;
- Fragilidade: alterações a um único ponto do código podem causar inúmeros efeitos secundários;
- Imobilidade: o código dentro do projeto não pode ser reutilizado com facilidade, pois possui muitas dependências;
- Viscosidade: existem dois tipos de viscosidade:
  - Design: fazer alterações que preservam o design de software são consideravelmente mais difíceis do que fazer gambiarras;
  - Ambiente: um ambiente de build muito lento faz com que os desenvolvedores prefiram soluções que requerem menos recursos do sistema (por exemplo: tempo de compilação), mas essas soluções podem quebrar o design.
