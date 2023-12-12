let cobra;
let segundaCobra;
let comida;
let score1 = 0, score2 = 0;
let tempoInicioJogo, tempoTotalJogado = 0;
let gameState = 'playing'; // 'playing' ou 'gameover'

/////////////////    FASE 2   /////////////////////////////
let fase2Ativada = false;
let tamanhoMinimoFase2 = 10; // Tamanho mínimo para ativar a fase 2
let barreiraX;
let mensagemFase2 = false;
let tempoExibicaoMensagem = 3000; // Tempo em milissegundos para exibir a mensagem (3 segundos)
//////////////////////////////////////////////////////////

function setup() {
  createCanvas(400, 400);
  frameRate(10); // Definir taxa de quadros por segundo
  barreiraX = width / 2; // Barreira está no centro
  tempoInicioJogo = millis();
  cobra = new Cobra(width/2, height/2, tamanho);
  segundaCobra = new Cobra(width / 2 - 20, height / 2, tamanho);
  comida = new Comida();
}

function tela1 (){
  if (gameState == 'playing') {
    background(teladejogo);
    
    var tempoDecorrido = millis() - tempoInicioJogo;
    tempoTotalJogado += deltaTime;
    
    cobra.controle();
    cobra.andar();
    cobra.desenha();

    segundaCobra.controlePlayer2();
    segundaCobra.andar();
    segundaCobra.desenha();
    
    comida.desenha();
    
    // Verifica se ambas as cobras atingiram o tamanho mínimo para a fase 2
  if (!fase2Ativada && cobra.corpo.length >= tamanhoMinimoFase2 && segundaCobra.corpo.length >= tamanhoMinimoFase2) {
    fase2Ativada = true;
    // Defini a posição da barreira na fase 2
    barreiraX = width / 2;
    // Ativa temporariamente a exibição da mensagem
    mensagemFase2 = true;
    setTimeout(() => {
      mensagemFase2 = false;
    }, tempoExibicaoMensagem);
  }
    // Adiciona a barreira se a fase 2 estiver ativada
  if (fase2Ativada) {
    fill(255);
    rect(barreiraX, 0, 10, height);
    
    // Verifica colisão da cobra 1 com a barreira
    if (cobra.colideComBarreira(barreiraX)) {
      gameState = 'gameover';
    }
    
    // Verifica colisão da cobra 2 com a barreira
    if (segundaCobra.colideComBarreira(barreiraX)) {
      gameState = 'gameover';
    }
  }

  // Exibi a mensagem se a fase 2 foi ativada
  if (mensagemFase2) {
    fill(255);
    textSize(16);
    text('Vocês estão na Fase 2!', width / 2 - 80, height / 2);
  }
    
    // Verifica colisão com a comida (primeira cobra)
    if (dist(cobra.corpo[cobra.corpo.length - 1].x, cobra.corpo[cobra.corpo.length - 1].y, comida.posicao.x, comida.posicao.y) < 1) {
      cobra.comer();
      colisao.play(); // Reproduz o som de colisão - maça sendo comida
      comida = new Comida();
      score1++; // Incrementa o score ao comer a comida
}
    // Verifica colisão com a comida (segunda cobra)
    if (dist(segundaCobra.corpo[segundaCobra.corpo.length - 1].x, segundaCobra.corpo[segundaCobra.corpo.length - 1].y, comida.posicao.x, comida.posicao.y) < 1) {
    segundaCobra.comer();
    colisao.play();
    comida = new Comida();
    score2++; // Incrementa o score ao comer a comida
  }
    
  // Exibir o score
  fill(255);
  textSize(14);
  text('Jogador 1: ' + score1, 10, 20);
  text('Jogador 2: ' + score2, 10, 40);
    
  var segundosJogados = Math.floor(tempoTotalJogado / 1000);
  var minutos = Math.floor(segundosJogados / 60);
  var horas = Math.floor(minutos / 60);
    text('Tempo: ' + horas + 'h ' + minutos % 60 + 'm ' + segundosJogados % 60 + 's', 10, 60);
    
// Verificar colisão com o próprio corpo (cobra 1)
    for (let i = 0; i < cobra.corpo.length - 1; i++) {
      if (cobra.corpo[cobra.corpo.length - 1].equals(cobra.corpo[i])) {
        gameState = 'gameover';
      }
    }
  } 
  // Verifica colisão da segunda cobra com o próprio corpo
  for (let i = 0; i < segundaCobra.corpo.length - 1; i++) {
    if (segundaCobra.corpo[segundaCobra.corpo.length - 1].equals(segundaCobra.corpo[i])) {
      gameState = 'gameover';
    }
  }
  // Verifica colisão entre as duas cobras
  if (cobra.colideComCobraOutra(segundaCobra) || segundaCobra.colideComCobraOutra(cobra)) {
    gameState = 'gameover';
}   
  if (gameState == 'gameover') {
  musicaJogo.stop();

  if (score1 > score2) {
    if (!vitoriasong.isPlaying()) {
    vitoriasong.play();
  }
    background(vitoria1);
    text('PONTUAÇÃO: ' + score1, 150, 270);
  } else if (score2 > score1) {
    if (!vitoriasong.isPlaying()) {
    vitoriasong.play();
  }
    background(vitoria2);
    text('PONTUAÇÃO: ' + score2, 150, 270);
  } else {
    if (!gameoversom.isPlaying()) {
    gameoversom.play();
    }
    background(gameover);
    text('EMPATE!', 170, 230);
  }

  if (mouseIsPressed) {
    gameoversom.stop();
    vitoriasong.stop();

    musicaJogo.play();
    
    gameState = 'playing';
    cobra = new Cobra(width / 2, height / 2, tamanho);
    segundaCobra = new Cobra(width / 2 - 20, height / 2, tamanho);
    comida = new Comida();
    score1 = 0;
    score2 = 0;
    tempoTotalJogado = 0;
    fase2Ativada = false;
    mensagemFase2 = false;
    }
  }
} 