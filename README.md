## S.O.L.I.D

DRY - Don't repeat yourself

### O que é ?

O S.O.L.I.D é um acrônimo que representa cinco princípios da programação orientada a objetos que facilitam no desenvolvimento de softwares e foi teorizado pelo Uncle Bob (Robert C. Martin) por volta do ano 2000. O autor Michael Feathers foi responsável pela criação do acrônimo.

#### Os 5 princípios:

- **[S]** - Single Responsiblity Principle (Princípio da Responsabilidade Única)
- **[O]** - Open-Closed Principle (Princípio do Aberto/Fechado)
- **[L]** - Liskov Substitution Principle (Princípio da Substituição de Liskov)
- **[I]** - Interface Segregation Principle (Princípio da Segregação de Interfaces)
- **[D]** - Dependency Inversion Principle (Princípio da Inversão de Dependências)

#### Benefícios

- Fácil de se manter, adaptar e se ajustar às alterações de escopo;
- Facilidade nos testes e entendimento;
- Extensível para alterações com o menor esforço necessário;
- Reaproveitamento de código.

#### Problemas que podemos evitar seguindo os princípios

- Mudanças simples em um único módulo de um projeto resultam em alterações em diversos pontos do projeto;
- Alterações a um único ponto do código podem causar inúmeros side effects;
- Não conseguimos reutilizar o código com facilidade, porque possui muitas dependências.

---

## Uso

Instalar node https://nodejs.org/en/download/

Instalar yarn dependencia

`$ npm install --global yarn `

### Observação

Na pasta src é apresentado cada princípio, em que cada principío possui um exemplo de vioção (diretório `_violation`) com comentários do motivo.

E no diretório `principle` é apresentado uma abordagem de como contornar o problema.
