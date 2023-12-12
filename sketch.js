// Link de explicação: https://docs.google.com/document/d/1mT_2eB9GBVzh5Ox81l6xBKP5UBWr8zkO9BmLsRejJYM/edit?usp=sharing

var tela = 0; 
var menu;
var instrucoes;
var teladejogo;
var creditos;
var gameover;
var vitoria1, vitoria2;
let tamanho = 10;
let musicaJogo, colisao, gameoversom,selecao, vitoriasong; //sons
 
function preload() {
  // Carrega as imagens e sons antes de iniciar o programa
  menu = loadImage('menu.png');
  instrucoes = loadImage('instrucoes.png');
  teladejogo = loadImage('teladejogo.png');
  creditos = loadImage('creditos.png');
  gameover = loadImage('gameover.png');
  musicaJogo = loadSound('musicaJogo.mp3');
  colisao = loadSound('colisao.mp3');
  selecao = loadSound('selecao.mpeg');
  gameoversom = loadSound('gameoversom.mp3');
  vitoria1 = loadImage('vitoria1.png');
  vitoria2 = loadImage('vitoria2.png');
  vitoriasong = loadSound('vitoriasong.mp3');
}

function draw() {
  // Verifica se a música não está tocando antes de iniciar o loop
  if (!musicaJogo.isPlaying()) {
    musicaJogo.play(); // Inicia a música de fundo em loop
    musicaJogo.setVolume(0.1); // Ajusta o volume da música
  }
  
  //inicializando a tela inicial (Menu)
  if (tela == 0){
    tela0();
  }
  //inicializando a tela de Jogo
  if (tela == 1){
    tela1();
  } 
  //inicializando a tela de Instruções
  if (tela == 2){
    tela2();
  } 
  //inicializando a tela de Créditos
  if (tela == 3){
    tela3();
  } 
}