
/* 1) Registro de idade no console: */
console.log ("17 anos")

/* 2) Registrar o número de semanas de programação: */
console.log ("Programei por 2 semanas em casa")

/* 3) Usando comentários: */
/* Este é um comentário de várias linhas
   explicando o código que será escrito */

/* 4) Criando variáveis de diferentes tipos: */
let gi = 42; 
console.log (gi) // número

let ga = "bar"; 
console.log (ga)// string

let ge = true; 
console.log (ge)// booleano

let go = { nome: 'Giovanna', idade: 17 }; 
console.log (go.nome)// objeto

let gu = null 
console.log (gu)// nulo

/* 5) Adicionando 3.5 à sua idade: */
let idade = 17
let novaIdade =  idade + 3.5
console.log (novaIdade)

/* 6) Quantos anos se passaram desde o pouso na lua em 1969: */
let anoAtual = new Date().getFullYear()
let lua = 1969
console.log (anoAtual - lua)

/* 7) Divisão de números: */
console.log (65 / 240)

/* 8) Multiplicação de números: */
console.log (0.2708 * 100)

/* 9) Concatenação de strings: */
let string1 = 'Hello';
let string2 = 'World';
console.log( string1 + string2);

/* 10) Concatenação de strings com espaço: */
let string3 = 'Hello';
let string4 = 'World';
console.log( string3 + ' ' + string4);

/* 11) Usando a propriedade length: */
let texto = 'Teaching the world how to code';
console.log(texto.length);

/* 12) Usando o método toUpperCase(): */
let texto2 = 'Kaian Novais';
console.log (texto2.toUpperCase())

/* 13) Removendo espaços em branco: */
let textoSemEspacos = '   Professor Kaian Novais   ';
console.log (textoSemEspacos)
console.log(textoSemEspacos.trim ());

/* 14) Gerando um número aleatório: */
let num = Math.random() * 100;
console.log (num)

/* 15) Encontrando o próximo inteiro maior: */
let numDecimal = 43.8;
console.log (Math.ceil(numDecimal))

/* 16) Verificando se um número é um número inteiro: */
let num2 = 2017
console.log (Number.isInteger(num2))




