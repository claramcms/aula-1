// Registro de idade no console:
console.log("Minha idade é de 16 anos.");


// Registrar o número de semanas de programação:
// Eu programei durante 2 semanas nas minhas férias
console.log("2 semanas");


// Usando comentários:
/* primeira aula de JS,
   utilizando comentário de várias linhas.
   Meu nome é Maria, 
   e eu tenho 16 anos.
 */


// Criando variáveis de diferentes tipos:
// variável number:
let num = 10;
console.log(num);
// variável string:
let fruta = "Laranja";
console.log(fruta);
// variável boolean:
let green = true;
let red = false;
console.log(green);
// variável object:
let identificacao = {
    nome: 'Maria Clara',
    idade: 16,
};
console.log(identificacao.idade);
// variável null
let altura = null;
console.log(altura);


// Adicionando 3.5 à sua idade: 
let idade = 16;
console.log(idade + 3.5);


// Quantos anos se passaram desde o pouso na lua em 1969:
// Passo 1: Criar uma instância do objeto Date para a data atual
let dataAtual = new Date();
// Passo 2: Obter o ano atual usando o método getFullYear()
let anoAtual = dataAtual.getFullYear();
// Passo 3: Subtrair 1969 do ano atual
let resultado = anoAtual - 1969;
// Registrando o resultado
console.log(resultado);


// Divisão de números:
console.log("65 divido por 240, é igual a: " + (65 / 240));


// Multiplicação de números:
console.log("0.2708 multiplicado por 100, é igual a: " + (0.2708 * 100));


// Concatenação de strings:
console.log('Hello' + 'World');


// Concatenação de strings com espaço:
console.log('Hello' + ' ' + 'World');


// Usando a propriedade length:
let caracteres = "Teaching the world how to code";
console.log(caracteres.length);


// Usando o método toUpperCase():
let maiuscula = "Kaian Novais";
console.log(maiuscula.toUpperCase());

// Removendo espaços em branco:
let espacos = "  Professor Kaian Novais  ";
console.log(espacos);
console.log(espacos.trim());


// Gerando um número aleatório:
let numeroAleatorio = Math.random();
let total = numeroAleatorio * 100;
console.log(total);


// Encontrando o próximo inteiro maior:
let arredondamento = Math.ceil(43.8);
console.log(arredondamento);


// Verificando se um número é um número inteiro:
let inteiro = Number.isInteger(2017);
console.log(inteiro);