# Liskov Substituition Principle

> "Uma classe derivada pode ser substituível por sua classe base"

O princípio de substituição de Liskov foi nomeado em homenagem à sua criadora, Barbara Liskov, que afirma que “objetos em um programa devem ser substituíveis por instâncias de seus subtipos sem alterar a corretude desse programa” (Martin, R. C. 2000). Isso quer dizer que uma classe estendida, deve se comportar igual a classe pai.

Um exemplo real seria um carro com as funcionalidade de freiar, ligar, desligar, etc. E imagine que agora temos um carro do tipo sedan que não possui as funcionalidades básicas de um carro como ligar e desligar.
