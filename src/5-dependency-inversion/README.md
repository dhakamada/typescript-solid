# Dependency Inversion

> “depender de abstrações e não de classes concretas”

Uncle Bob quebra a definição desse princípio em dois sub-itens:

1. "Módulos de alto nível não devem depender de módulos de baixo nível. Ambos devem depender de abstrações;

2. “As abstrações não devem depender de detalhes. Os detalhes devem depender das abstrações.”

Um analogia para explicar esse princípio seria os aparelhos eletrônicos (ex: 110V), que tem uma forte dependência do tipo da tomada (110 e 220V), que se não utilizar de forma incorreta, pode danificar o aparelho.
E esse comportamento viola o princípio de que módulos de alto nível (aparelho eletrônico) não devem depender de módulos de baixo nível (tomadas).
