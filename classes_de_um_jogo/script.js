// Classe que representa o herói de uma aventura
class Heroi {
    // Construtor para inicializar as propriedades do herói
    constructor(nome, idade, tipo) {
      this.nome = nome; // Nome do herói
      this.idade = idade; // Idade do herói
      this.tipo = tipo; // Tipo do herói (guerreiro, mago, monge, ninja)
    }
  
    // Método que representa o ataque do herói
    atacar() {
      let ataque = ''; // Inicializa a variável para armazenar o tipo de ataque
  
      // Estruturas de decisão para definir o ataque conforme o tipo
      switch (this.tipo) {
        case 'mago':
          ataque = 'magia';
          break;
        case 'guerreiro':
          ataque = 'espada';
          break;
        case 'monge':
          ataque = 'artes marciais';
          break;
        case 'ninja':
          ataque = 'shuriken';
          break;
        default:
          ataque = 'um ataque desconhecido';
      }
  
      // Exibe a mensagem de ataque
      console.log(`O ${this.tipo} atacou usando ${ataque}`);
    }
  }
  
  // Função principal para criar os heróis e realizar o ataque
  function main() {
    // Criação de heróis
    const heroi1 = new Heroi('Arthur', 30, 'guerreiro');
    const heroi2 = new Heroi('Merlin', 150, 'mago');
    const heroi3 = new Heroi('Bruce', 25, 'monge');
    const heroi4 = new Heroi('Ryu', 22, 'ninja');
  
    // Cada herói realiza um ataque
    heroi1.atacar();
    heroi2.atacar();
    heroi3.atacar();
    heroi4.atacar();
  }
  
  // Executa a função principal
  main();
  