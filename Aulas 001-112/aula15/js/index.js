/* Uma forma para transformar string em number:
let numero = prompt('Digite um número:');
numero= Number(numero);

Outra forma:
const numero = Number(prompt('Digite um número:'));

usando a id=numero-titulo do html temos: 
const numeroTitulo=document.getElementById('numero-titulo');

usando a id= texto do html temos:
const texto = document.getElementById('texto');*/

const numero = Number(prompt('Digite um número:'));
const numeroTitulo=document.getElementById('numero-titulo');
const texto = document.getElementById('texto');

numeroTitulo.innerHTML=numero;
texto.innerHTML+=`<p> O seu número é : ${numero}. </p>`
texto.innerHTML+=`<p> Raiz quadrada : ${numero**0.5}</p>`;
texto.innerHTML+=`<p> ${numero} é inteiro: ${Number.isInteger(numero)} </p>`;
texto.innerHTML+=`<p> É Nan : ${Number.isNaN(numero)}</p>`;
texto.innerHTML+=`<p> Arredondando para baixo: ${Math.floor(numero)} </p>`;
texto.innerHTML+=`<p> Arredondando para cima: ${Math.ceil(numero)}</p>`;
texto.innerHTML+=`<p> Com duas casas decimais : ${numero.toFixed(2)}</p>`;
// se usar texto.innerHTML= só aparecerá a úlima linha pois, uma linha sobrescreve a anterior
// para aparecerem todas as linhas na tela acrescente um + antes do igual texto.innerHTML+=