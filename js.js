alert('Olá dev, como vai? Seja bem vinda!');
alert('Vamos começar!');
//var nome = prompt('Qual o seu nome?');
var n = prompt('Digite um numero: ');
//alert = ('Dev' +nome+'voce digitou o numero'+n);
n = parseInt(n);
if(n%2==0  && n>=0 && n< 100) {
  alert('O numero corresponde aos criterios');
}else{
  alert('O numero não corresponde aos criterios');
}