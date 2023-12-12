function tela2(){
  background(instrucoes);
  
  //Texto de instruções  
  fill("White");
  textFont('Courier New', 14);
  let lines1 = 'Guie a cobrinha para que ela colete \no maior número possível de alimentos,\nrepresentados por pontos. \nCuidado, evite colisões!'; // "\n" is a "new line" character
  textLeading(14);
  text(lines1, 48, 87);
  let lines2 = 'Pra mover a cobrinha:\nJogador 1, utilize as setas (↑ ↓ ← →)\nJogador 2, utilize as teclas W S A D';
  text(lines2, 48, 150);
  
  text("CIMA(W)",168, 215);  
  text("BAIXO(S)",170, 335);
  text("ESQUERDA(A)", 50, 274);
  text("DIREITA(D)",250, 274);
}