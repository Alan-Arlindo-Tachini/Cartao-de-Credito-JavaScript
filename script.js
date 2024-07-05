// All valid credit card numbers
const valid1 = [4, 5, 3, 9, 6, 7, 7, 9, 0, 8, 0, 1, 6, 8, 0, 8];
const valid2 = [5, 5, 3, 5, 7, 6, 6, 7, 6, 8, 7, 5, 1, 4, 3, 9];
const valid3 = [3, 7, 1, 6, 1, 2, 0, 1, 9, 9, 8, 5, 2, 3, 6, 4];
const valid4 = [6, 0, 1, 1, 1, 4, 4, 3, 4, 0, 6, 8, 2, 9, 0, 5];
const valid5 = [4, 5, 3, 9, 4, 0, 4, 9, 6, 7, 8, 6, 9, 6, 6, 6];

// All invalid credit card numbers
const invalid1 = [4, 5, 3, 2, 7, 7, 8, 7, 7, 1, 0, 9, 1, 7, 9, 5];
const invalid2 = [5, 7, 9, 5, 5, 9, 3, 3, 9, 2, 1, 3, 4, 6, 4, 3];
const invalid3 = [9, 7, 5, 7, 9, 6, 0, 8, 4, 4, 5, 9, 9, 1, 4];
const invalid4 = [6, 0, 1, 1, 1, 2, 7, 9, 6, 1, 7, 7, 7, 9, 3, 5];
const invalid5 = [5, 3, 8, 2, 0, 1, 9, 7, 7, 2, 8, 8, 3, 8, 5, 4];

// Can be either valid or invalid
const mystery1 = [3, 4, 4, 8, 0, 1, 9, 6, 8, 3, 0, 5, 4, 1, 4];
const mystery2 = [5, 4, 6, 6, 1, 0, 0, 8, 6, 1, 6, 2, 0, 2, 3, 9];
const mystery3 = [6, 0, 1, 1, 3, 7, 7, 0, 2, 0, 9, 6, 2, 6, 5, 6, 2];
const mystery4 = [4, 9, 2, 9, 8, 7, 7, 1, 6, 9, 2, 1, 7, 0, 9, 3];
const mystery5 = [4, 9, 1, 3, 5, 4, 0, 4, 6, 3, 0, 7, 2, 5, 2, 3];

// An array of all the arrays above
const batch = [
  valid1,
  valid2,
  valid3,
  valid4,
  valid5,
  invalid1,
  invalid2,
  invalid3,
  invalid4,
  invalid5,
  mystery1,
  mystery2,
  mystery3,
  mystery4,
  mystery5,
];

// Add your functions below:
// FUNÇÃO PARA SABER SE O CARTÃO É VÁLIDO OU NÃO
let validateCred = (validar) => {
  let result = [];
  let soma = 0;

  for (let i = 0; i < validar.length; i++) {
    let trueOrFalse = i % 2 === 0;
    let teste = [validar[i] * 2];
    let currentDigit = validar[i];
    // console.log(trueOrFalse);
      if (trueOrFalse && teste > 9) {
        currentDigit = currentDigit * 2 - 9;
      } else if (trueOrFalse) {
        currentDigit = currentDigit * 2;
      } else {
        currentDigit;
      }
      result[i] = currentDigit;
      soma += currentDigit;
    } 
  

  let validadoResult = soma % 10 === 0;
  console.log("O cartão: " + validar.join("") + " é: " + validadoResult);
};

// ESCOLHA O CARTÃO QUE ESTÁ NO ARRAY BATCH
validateCred(batch[0]);

// FORMAR ARRAY QUE ARMAZENA CARTÕES VALIDOS E INVALIDOS
let findCard = (cartao) => {
  let result = [];
  let soma = 0;

  for (let i = 0; i < cartao.length; i++) {
    let trueOrFalse = i % 2 === 0;
    let teste = [cartao[i] * 2];
    let currentDigit = cartao[i];
    if (trueOrFalse && teste > 9) {
      currentDigit = currentDigit * 2 - 9;
    } else if (trueOrFalse) {
      currentDigit = currentDigit * 2;
    } else {
      currentDigit;
    }
    result[i] = currentDigit;
    soma += currentDigit;
  }

  let validadoResult = soma % 10 === 0;
  return validadoResult;
};

// FUNÇÃO QUE CHAMARÁ FINDCARD
let valido;
let invalido;
const findInvalidCards = (verificar) => {
  valido = [];
  invalido = [];
  for (let i = 0; i < verificar.length; i++) {
    if (verificar[i].length === 16 && findCard(verificar[i])) {
      valido[i] = batch[i];
    } else {
      invalido[i] = batch[i];
    }
  }

  // REMOVE STRING VAZIAS DO ARRAY
  valido = valido.filter((card) => card !== undefined);
  invalido = invalido.filter((card) => card !== undefined);

  console.log("Validos");
  console.log(valido);
  console.log("Invalidos");
  console.log(invalido);
};

// PEGA TODOS OS CARTÕES DO ARRAY PARA VERIFICAR
findInvalidCards(batch);

// VERIFICAR EMPRESA COM CARTÃO INVALIDO
const idInvalidCardCompanies = (cartao) => {
  let amex = 0;
  let visa = 0;
  let masterCard = 0;
  let discover = 0;
  let empresasCartoesInvalidos = [];
  console.log("Verificar cartões invalidos:");
  console.log(
    "Empresas de cartões e seu primeiro digito:	3	Amex (American Express), 4	Visa, 5	MasterCard e 6	Discover"
  );

  for (let i = 0; i < cartao.length; i++) {
    if (cartao[i][0] === 3) {
      amex = amex + 1;
    } else if (cartao[i][0] === 4) {
      visa = visa + 1;
    } else if (cartao[i][0] === 5) {
      masterCard = masterCard + 1;
    } else if (cartao[i][0] === 6) {
      discover = discover + 1;
    } else {
      console.log(
        "Empresa não cadastrada: " +
          cartao[i][0] +
          " esse numero inicial não consta nas empresas de cartões"
      );
    }
  }
  if (amex > 1) {
    empresasCartoesInvalidos.push("Amex");
  }
  if (visa > 1) {
    empresasCartoesInvalidos.push("Visa");
  }
  if (masterCard > 1) {
    empresasCartoesInvalidos.push("MasterCard");
  }
  if (discover > 1) {
    empresasCartoesInvalidos.push("Discover");
  }
  console.log("Empresas de cartões que emitiram cartões invalidos:");
  console.log(empresasCartoesInvalidos);
};

idInvalidCardCompanies(invalido);
