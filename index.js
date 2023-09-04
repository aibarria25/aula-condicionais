/*
Exercícios de interpretação de código

1- 
const respostaDoUsuario = prompt("Digite o número que você quer testar")
const numero = Number(respostaDoUsuario)

if (numero % 2 === 0) {
  console.log("Passou no teste.")
} else {
  console.log("Não passou no teste.")
}

a) O codigo e usado para identificar se o numero digitado pelo usuario e par ou impar

b) "Passou no teste" e impresso se o numero inserido for par

c) "Não passou no teste" se o numero for impar.

2-
let fruta = prompt("Escolha uma fruta")
let preco
switch (fruta) {
  case "Laranja":
    preco = 3.5
    break;
  case "Maçã":
    preco = 2.25
    break;
  case "Uva":
    preco = 0.30
    break;
  case "Pêra":
    preco = 5.5
    break; // BREAK PARA O ITEM c.
  default:
    preco = 5
    break;
}
console.log("O preço da fruta ", fruta, " é ", "R$ ", preco)


a) O codigo serve para informar o preço da fruta escolhida.

b) 2.25

c) Se o 'break' que esta logo acima do ultimo 'default' for retirado no console vai
ser impresso o proximo valor, no caso 5, porque o codigo vai continuar executando 
ate o proximo 'break' 

3-
const numero = Number(prompt("Digite o primeiro número."))

if(numero > 0) {
  console.log("Esse número passou no teste")
	let mensagem = "Essa mensagem é secreta!!!"
}

console.log(mensagem)

a) A primeira linha está nomeando uma variavel que no caso vai ser uma string 
que vai ser convertida em um numero

b) A mensagem impressa no terminal se o usuario digitar 10, vai ser: Esse número passou no teste.
E se fosse o número -10, nao vai imprimir nada

c) Sim, haverá  erro porque console.log(mensagem) esta fora do comando e nao vai estar definida a variavel mensagem

*/

//Exercícios de escrita de código

//1-
/*
const idade = prompt('Qual é sua idade?:')
Number(idade) >= 18 
? console.log("Você pode dirigir")
: console.log("Você não pode dirigir.")


const idade = prompt('Qual é sua idade?:')
if (Number(idade) >= 18) {
console.log("Você pode dirigir")
}else{console.log("Você não pode dirigir.")}


//2- 
const turno = prompt('Qual turno do dia que voce estuda? Digite M para matutino, V para Vespertino ou N para Noturno').toUpperCase()
if (turno === "M"){
    console.log("Bom Dia!")
}else {
    if (turno === "V") {
        console.log("Boa Tarde!")
    }else{
        console.log("Boa Noite!")
    }
}
*/
//3-
const generoDoFilme = prompt("Digite o genero do filme que gostaria asistir").toLowerCase()
const preçoIngresso = prompt("Digite o preço para assistir o filme")


if (generoDoFilme === "fantasia" && Number(preçoIngresso) < 15){
console.log("Bom filme!")
}else{
  console.log("Escolha outro filme :(")
}