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
  let maiorValor = -Infinity;
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

// Desafio 7 (Crie uma função de Caça ao Rato)
function catAndMouse(mouse, cat1, cat2) {
  let distCat1 = Math.abs(cat1 - mouse);
  let distCat2 = Math.abs(cat2 - mouse);
  if (distCat1 > distCat2) {
    return 'cat2';
  } if (distCat1 < distCat2) {
    return 'cat1';
  } if (distCat1 === distCat2) {
    return 'os gatos trombam e o rato foge';
  }
}

// Desafio 8 (Crie uma função FizzBuzz)
function fizzBuzz(numberArray) {
  let stringArray = [];
  for (let index = 0; index < numberArray.length; index += 1) {
    let check3 = numberArray[index] % 3;
    let check5 = numberArray[index] % 5;
    if (check3 === 0 && check5 === 0) {
      stringArray[index] = 'fizzBuzz';
    } if (check3 !== 0 && check5 === 0){
      stringArray[index] = 'buzz';
    } if (check3 === 0 && check5 !== 0){
      stringArray[index] = 'fizz';
    } if (check3 !== 0 && check5 !== 0) {
      stringArray[index] = 'bug!';
    }
  }
  return stringArray;
}

// Desafio 9 (Crie uma função que Codifique e Decodifique)
function encode(text) {
  let code = '';
  for (let index = 0; index < text.length; index += 1) {
    code = text.replace(/a/g, '1')
      .replace(/e/g, '2')
      .replace(/i/g, '3')
      .replace(/o/g, '4')
      .replace(/u/g, '5');
  }
  return code;
}

function decode(text2) {
  let code = '';
  for (let index = 0; index < text2.length; index += 1) {
    code = text2.replace(/1/g, 'a')
      .replace(/2/g, 'e')
      .replace(/3/g, 'i')
      .replace(/4/g, 'o')
      .replace(/5/g, 'u');
  }
  return code;
}

// Desafio 10 (Crie uma função de Lista de Tecnologias)
function techList(tecName, personName) {
  if (tecName === null && personName === null) {
    return 'Vazio!';
  }
  let object = {
    tech: 'null',
    name: 'null',
  };
  for (let index = 0; index < tecName.length; index += 1) {
    object.tech = tecName[index];
    object.name = personName;
    return object;
  }
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
