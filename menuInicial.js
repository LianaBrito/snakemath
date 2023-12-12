var opcao;

function tela0(){
  
  background(menu);

} 

// Verifica o  movimento do mouse
function mouseMoved() {
  if (mouseX >= 115 && mouseY >= 155 && mouseX <= 270 &&  mouseY <= 190) {
    opcao = 1;
    } else if (mouseX >= 83 && mouseY >= 230 && mouseX <= 303 &&  mouseY <= 265) {
      opcao = 2;
    } else if (mouseX >= 106 && mouseY >= 300 && mouseX <= 280 &&  mouseY <= 337) {
      opcao = 3;
    } else {
      opcao = 4;
    }
}
// Verifica se o mouse está sendo pressionado
function mousePressed(){
  if (tela == 0){
    if (opcao == 1){
      tela = 1;
      selecao.play(); // Reproduz o som de seleção
    } else if (opcao == 2){
      tela = 2;
      selecao.play();
    } else if (opcao == 3){
      tela = 3;
      selecao.play();
    } 
  } if (tela != 0 && mouseX >= 10 && mouseY >= 365 && mouseX <= 40 && mouseY <= 390) {
    tela = 0;
    selecao.play();
    }
}