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
  return text.split('');
}

// Desafio 4 (Crie uma função que use concatenação de strings)
function concatName(stringText) {
  let firstText = stringText[0];
  let lastText = stringText.pop();
  return `${lastText}, ${firstText}`;
}

// Desafio 5
function footballPoints() {
  // seu código aqui
}

// Desafio 6
function highestCount() {
  // seu código aqui
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
