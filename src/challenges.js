// Desafio 1 (Crie uma função usando o operador &&)
function compareTrue(bool1, bool2) {
  if (bool1 === true && bool2 === true) {
    return true;
  }
  return false;
}

// Desafio 2 (Crie uma função que calcula a área de um triângulo)
function calcArea(base, heigth) {
  return (base * heigth) / 2;
}

// Desafio 3 (Crie uma função que divida uma frase)
function splitSentence(text) {
  return text.split(' ');
}

// Desafio 4 (Crie uma função que use concatenação de strings)
function concatName(stringText) {
  let firstText = stringText[0];
  let lastText = stringText.pop();
  return `${lastText}, ${firstText}`;
}

// Desafio 5 (Crie uma função que calcula a quantidade de pontos em um campeonato de futebol)
function footballPoints(wins, ties) {
  return (wins * 3) + (ties);
}

// Desafio 6 (Crie uma função que calcula o número de repetições do maior número)
function highestCount(arrayNumber) {
  let maiorValor = 0;
  let contador = 0;
  for (let index = 0; index <= arrayNumber.length; index += 1) {
    if (arrayNumber[index] > maiorValor) {
      maiorValor = arrayNumber[index];
    }
  }
  for (let index2 = 0; index2 <= arrayNumber.length; index2 += 1) {
    if (arrayNumber[index2] === maiorValor) {
      contador += 1;
    }
  }
  return contador;
}


// Desafio 7
function catAndMouse() {
  // seu código aqui
}

// Desafio 8
function fizzBuzz() {
  // seu código aqui
}

// Desafio 9
function encode() {
  // seu código aqui
}
function decode() {
  // seu código aqui
}

// Desafio 10
function techList() {
  // seu código aqui
}

module.exports = {
  calcArea,
  catAndMouse,
  compareTrue,
  concatName,
  decode,
  encode,
  fizzBuzz,
  footballPoints,
  highestCount,
  splitSentence,
  techList,
};
