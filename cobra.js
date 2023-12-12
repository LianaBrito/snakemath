// Inicializando a cobra
class Cobra {
  constructor(x, y, tamanho) {
    // Criando os vetores
    this.posicao = createVector(x, y);
    this.direcao = createVector(1, 0);
    this.velocidade = createVector(tamanho, 0);
    this.tamanho = tamanho;
    this.corpo = [];
    this.corpo.push(this.posicao);
  }

  // Método desenhar cobra
  desenha() {
    fill(255); // Preencher com cor branca
    for (let parte of this.corpo) {
      rect(parte.x, parte.y, this.tamanho, this.tamanho);
    }
  }

  // Método comer
  comer() {
    let novaParte = this.corpo[this.corpo.length - 1].copy();
    novaParte.add(this.direcao.x * this.tamanho, this.direcao.y * this.tamanho);
    this.corpo.push(novaParte);
  }

  // Método andar cobra / movimentos
  andar() {
    let novaParte = this.corpo[this.corpo.length - 1].copy();
    novaParte.add(this.direcao.x * this.tamanho, this.direcao.y * this.tamanho);

    if (novaParte.x > width) {
      novaParte.x = 0;
    } else if (novaParte.x < 0) {
      novaParte.x = width - this.tamanho;
    } else if (novaParte.y > height) {
      novaParte.y = 0;
    } else if (novaParte.y < 0) {
      novaParte.y = height - this.tamanho;
    }

    this.corpo.push(novaParte);
    this.corpo.splice(0, 1);
  }
  
  // Método para verificar se uma posição colide com a cobra
intersecaoComCobra(posicao) {
  for (let parte of this.corpo) {
    if (parte.equals(posicao)) {
      return true;
    }
  }
  return false;
}
  
  // Método para verificar se as cobras colidem entre si
  colideComCobraOutra(cobra) {
  var totalSegCobra = cobra.corpo.length;
  for (let i = 0; i < totalSegCobra; i++) {
    const seg = cobra.corpo[i];
    if (this.corpo[this.corpo.length - 1].equals(seg)) {
      return true; 
    }
  }
  return false; 
}
  // Método para verificar se a cobra colide com a barreira
  colideComBarreira(barreiraX) {
  const cabeca = this.corpo[this.corpo.length - 1];
  return cabeca.x > barreiraX - this.tamanho && cabeca.x < barreiraX + 10;
}
  
// Método controle cobra 1
  controle() {
    if (keyIsDown(LEFT_ARROW) && this.direcao.x === 0) {
      this.direcao.x = -1;
      this.direcao.y = 0;
    } else if (keyIsDown(RIGHT_ARROW) && this.direcao.x === 0) {
      this.direcao.x = 1;
      this.direcao.y = 0;
    } else if (keyIsDown(DOWN_ARROW) && this.direcao.y === 0) {
      this.direcao.x = 0;
      this.direcao.y = 1;
    } else if (keyIsDown(UP_ARROW) && this.direcao.y === 0) {
      this.direcao.x = 0;
      this.direcao.y = -1;
    }
  }
  
  // Método controle cobra 2
  controlePlayer2() {
    if (keyIsDown(65) && this.direcao.x === 0) { // Tecla A
      this.direcao.x = -1;
      this.direcao.y = 0;
    } else if (keyIsDown(68) && this.direcao.x === 0) { // Tecla D
      this.direcao.x = 1;
      this.direcao.y = 0;
    } else if (keyIsDown(83) && this.direcao.y === 0) { // Tecla S
      this.direcao.x = 0;
      this.direcao.y = 1;
    } else if (keyIsDown(87) && this.direcao.y === 0) { // Tecla W
      this.direcao.x = 0;
      this.direcao.y = -1;
    }
  }
}