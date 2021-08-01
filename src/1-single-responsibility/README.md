# Single Responsiblity Principle

> "Nunca deve haver mais de um motivo para uma classe mudar"

Uma classe deve ter uma responsabilidade função, ou seja, deve tratar apenas sobre si, tendo uma única tarefa e ser expert em executá-la no seu contexto.

Uma analogia para explicar como o principio funciona é a relação da pessoa com a cerveja. Como pessoa, você deve ter conhecimento dos tipos de cervejas, nome, marca, etc. Entretando, você não precisa saber como ela foi fabricada, o processo de transporte em que chegou ao supermercado que você comprou.

Nós apenas a bebemos =)

### Caso não siga o seguinte princípio, pode ocorrer os seguintes side effects

1. Falta de coesão — uma classe não deve assumir responsabilidades que não são suas;
2. Alto acoplamento — Mais responsabilidades geram um maior nível de dependências, deixando o sistema engessado e frágil para alterações;
3. Dificuldades na implementação de testes — É difícil de “mockar” esse tipo de classe;
4. Dificuldades para reaproveitar o código.
