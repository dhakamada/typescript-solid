# Open/Closed Principle

> "Aberto para extensão e Fechado para modificação."

Podemos estender de outras classes ou interfaces, mas não devemos alterar as suas classes estendidas para não ocorrer side effects.

Um exemplo prático seria um
adaptador na parede que estará sempre fechado para modificações. Não podemos troca-lo depois de encaixado na parede ou estendido se quisermos mais. Porém, o adaptador fixo sempre vai fornecer um jeito de extender, como por exemplo conectar uma extensão em um adaptador para mais adaptação.

### Caso não siga o seguinte princípio, pode ocorrer os seguintes side effects

1. Criação de novas funcionalidades vão requerer modificar testes pré existentes;
2. Quebra o princípio SRP desde uma classe ou função com multiplas responsabilidades;
3. Dificuldade de manutenção e entendimento da lógica.
