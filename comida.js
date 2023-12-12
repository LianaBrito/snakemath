// Comida da cobra
class Comida {
  constructor() {
    this.tamanho = 10;
    this.posicionarComida();
  }
  
  // Método para posicionar a comida evitando colisões com a cobra
  posicionarComida() {
    let novaPosicao;
    do {
      novaPosicao = createVector(floor(random(width / this.tamanho)) * this.tamanho, floor(random(height / this.tamanho)) * this.tamanho);
    } while (cobra.intersecaoComCobra(novaPosicao)); // Garantir que a nova posição não está na cobra
    this.posicao = novaPosicao;
  }

  // Método desenhar comida
  desenha() {
    fill(255, 0, 0); // Preencher com cor vermelha
    rect(this.posicao.x, this.posicao.y, this.tamanho, this.tamanho);
  }
}
