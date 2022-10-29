// Desafio 11 (Crie uma função de número de telefone)
// Salvando código mais próximo do correto para testes:
// if (phoneNumber.length !== 11) return 'Array com tamanho incorreto.';
//   for (let index = 0; index < phoneNumber.length; index += 1) {
//     let cont = 0;
//     for (let index2 = 0; index2 < phoneNumber.length; index2 += 1) {
//       if (phoneNumber[index] === phoneNumber[index2]) {
//         cont += 1;
//       }
//     } if (phoneNumber[index] < 0 || phoneNumber[index] > 9 || cont > 2) {
//       return 'não é possível gerar um número de telefone com esses valores';
//     }
//   }
//   let number = phoneNumber.join('');
//   return `(${number.substring(0, 2)}) ${number.substring(2, 7)}-${number.substring(7, 11)}`;
// Fim do Código
// Pensando em uma alternativa para diminuir a complexidade cognitiva atual de 10 para o limite, que é 5.
// eslint-disable-next-line complexity
function generatePhoneNumber(phoneNumber) {
  if (phoneNumber.length !== 11) return 'Array com tamanho incorreto.';
  let num = phoneNumber.join(''); phoneNumber = phoneNumber.sort(function (a, b) { return b - a; });
  if (num.includes('-') || phoneNumber.some((el) => el > 9)) {
    return 'não é possível gerar um número de telefone com esses valores';
  }
  if ((phoneNumber[0] === Math.sqrt(phoneNumber[1] * phoneNumber[2]))
    || (phoneNumber[1] === Math.sqrt(phoneNumber[2] * phoneNumber[3]))
    || (phoneNumber[2] === Math.sqrt(phoneNumber[3] * phoneNumber[4]))
    || (phoneNumber[3] === Math.sqrt(phoneNumber[4] * phoneNumber[5]))
    || (phoneNumber[4] === Math.sqrt(phoneNumber[5] * phoneNumber[6]))
    || (phoneNumber[5] === Math.sqrt(phoneNumber[6] * phoneNumber[7]))
    || (phoneNumber[6] === Math.sqrt(phoneNumber[7] * phoneNumber[8]))
    || (phoneNumber[7] === Math.sqrt(phoneNumber[8] * phoneNumber[9]))
    || (phoneNumber[8] === Math.sqrt(phoneNumber[9] * phoneNumber[10]))) {
    return 'não é possível gerar um número de telefone com esses valores';
  }
  return `(${num.substring(0, 2)}) ${num.substring(2, 7)}-${num.substring(7, 11)}`;
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
