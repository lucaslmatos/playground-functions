// Desafio 11 (Crie uma função de número de telefone)
// eslint-disable-next-line complexity, max-lines-per-function
function generatePhoneNumber(phoneNumber) {
  if (phoneNumber.length !== 11) return 'Array com tamanho incorreto.';
  for (let index = 0; index < phoneNumber.length; index += 1) {
    if (phoneNumber[index] < 0 || phoneNumber[index] > 9) {
      return 'não é possível gerar um número de telefone com esses valores';
    }
    let cont = 0;
    for (let index2 = 0; index2 < phoneNumber.length; index2 += 1) {
      if (phoneNumber[index2] === phoneNumber[index]) {
        cont += 1;
      }
      if (cont > 2) return 'não é possível gerar um número de telefone com esses valores';
    }
  }
  let number = `(${phoneNumber[0]}${phoneNumber[1]}) ${phoneNumber[2]}${phoneNumber[3]}${phoneNumber[4]}${phoneNumber[5]}${phoneNumber[6]}-${phoneNumber[7]}${phoneNumber[8]}${phoneNumber[9]}${phoneNumber[10]}`;
  return number;
}

// Desafio 12 (Crie uma função que teste a condição de existência de um triângulo)
function triangleCheck(lineA, lineB, lineC) {
  if (lineA >= lineB + lineC || lineB >= lineA + lineC || lineC >= lineA + lineB) {
    return false;
  } return true;
}

// Desafio 13 (Crie uma função de boas vindas ao Bar da Trybe!)
function hydrate(text) {
  let r = /\d+/g;
  let matches = text.match(r);
  let soma = 0;
  for (let index = 0; index < matches.length; index += 1) {
    soma += parseInt(matches[index], 0);
  } if (soma === 1) return (`${soma} copo de água`);
  return (`${soma} copos de água`);
}

module.exports = {
  generatePhoneNumber,
  hydrate,
  triangleCheck,
};
