/*Minha resolução
function getDiaSemana(){
    let diaSemanaTexto;
    switch(diaDaSemana){
        case 0:
            diaSemanaTexto='Domingo';
            return diaSemanaTexto;
        case 1:
            diaSemanaTexto='Segunda';
            return diaSemanaTexto;
        case 2:
            diaSemanaTexto='Terça';
            return diaSemanaTexto;
        case 3:
            diaSemanaTexto='Quarta';
            return diaSemanaTexto;
        case 4:
            diaSemanaTexto='Quinta';
            return diaSemanaTexto;
        case 5:
            diaSemanaTexto='Sexta';
            return diaSemanaTexto;
        case 6:
            diaSemanaTexto='Sábado';
            return diaSemanaTexto;
        Default:
            diaSemanaTexto=' ';
            return diaSemanaTexto;
    }
}
const data= new Date(2019,09,07,22,52,00);
const diaDaSemana=data.getDay();
const diaSemanaTexto=getDiaSemana(diaDaSemana)

function getmes(){
    let nomeMes;
    switch(mes){
        case 0:
            nomeMes='Janeiro';
            return nomeMes;
        case 1:
            nomeMes='Fevereiro';
            return nomeMes;
        case 2:
                nomeMes='Março';
                return nomeMes;
        case 3:
                nomeMes='Abril';
                return nomeMes;
        case 4:
                nomeMes='Maio';
                return nomeMes;
        case 5:
                nomeMes='Junho';
                return nomeMes;
        case 6:
                nomeMes='Julho';
                return nomeMes;
        case 7:
            nomeMes='Agosto';
            return nomeMes;
        case 8:
                nomeMes='Setembro';
                return nomeMes;
        case 9:
                nomeMes='Outubro';
                return nomeMes;
        case 10:
                nomeMes='Novembro';
                return nomeMes;
        case 11:
                nomeMes='Dezembro';
                return nomeMes;
        Default:
        nomeMes=' ';
        return nomeMes;
    }
}
const mes= data.getMonth();
const nomeMes=getmes(mes)

const dia = data.getDate();
const ano=data.getFullYear();
const hora = data.getHours();
const minuto=data.getMinutes();

const msg=`${getDiaSemana(diaDaSemana)}, ${dia} de ${getmes(mes)} de ${ano} ${hora}:${minuto}`;
document.getElementById('resultado').innerHTML=msg;
 */
// Resoluções do prof
/* PRIMEIRA FORMA
const h1 = document.querySelector('.container h1');
const data= new Date();
h1.innerHTML= data.toString();

function getDiaSemanaTexto(diaSemana){
    let diaSemanaTexto;
    switch(diaSemana){
        case 0:
            diaSemanaTexto='Domingo';
            return diaSemanaTexto;
        case 1:
            diaSemanaTexto='Segunda-feira';
            return diaSemanaTexto;
        case 2:
            diaSemanaTexto='Terça-feira';
            return diaSemanaTexto;
        case 3:
            diaSemanaTexto='Quarta-feira';
            return diaSemanaTexto;
        case 4:
            diaSemanaTexto='Quinta-feira';
            return diaSemanaTexto;
        case 5:
            diaSemanaTexto='Sexta-feira';
            return diaSemanaTexto;
        case 6:
            diaSemanaTexto='Sábado';
            return diaSemanaTexto;
        Default:
            diaSemanaTexto=' ';
            return diaSemanaTexto;
    }
}
function getNomeMes(numeroMes){
    let nomeMes;
    switch(numeroMes){
        case 0:
                nomeMes='Janeiro';
                return nomeMes;
        case 1:
                nomeMes='Fevereiro';
                return nomeMes;
        case 2:
                nomeMes='Março';
                return nomeMes;
        case 3:
                nomeMes='Abril';
                return nomeMes;
        case 4:
                nomeMes='Maio';
                return nomeMes;
        case 5:
                nomeMes='Junho';
                return nomeMes;
        case 6:
                nomeMes='Julho';
                return nomeMes;
        case 7:
                nomeMes='Agosto';
                return nomeMes;
        case 8:
                nomeMes='Setembro';
                return nomeMes;
        case 9:
                nomeMes='Outubro';
                return nomeMes;
        case 10:
                nomeMes='Novembro';
                return nomeMes;
        case 11:
                nomeMes='Dezembro';
                return nomeMes;
        Default:
        nomeMes=' ';
        return nomeMes;
    }
}
function zeroAEsquerda (num){
    return num>=10 ? num : `0${num}`;
}
function criaData(data){
    const diaSemana = data.getDay();
    const mes = data.getMonth();
    const nomeDia=getDiaSemanaTexto(diaSemana);
    const nomeMes=getNomeMes(mes)
     return (`${nomeDia}, ${data.getDate()} de
     ${nomeMes} de ${data.getFullYear()} 
     ${zeroAEsquerda(data.getHours())} : ${zeroAEsquerda(data.getMinutes())}`
     );
}
h1.innerHTML=criaData(data);    
SEGUNDA FORMA:
const h1 = document.querySelector('.container h1');
const data= new Date();
const opcoes = {
    dateStyle: 'full',
    timeStyle: 'short'
}
h1.innerHTML = data.toLocaleDateString('pt-BR', opcoes);
OUTRA FORMA DE ESCREVER A MESMA COISA:
const h1 = document.querySelector('.container h1');
const data= new Date();
h1.innerHTML = data.toLocaleDateString('pt-BR', {dateStyle: 'full', timeStyle: 'short'});
TERCEIRA FORMA:*/
const h1 = document.querySelector('.container h1');
const data= new Date();
h1.innerHTML= data.toString();

function getDiaSemanaTexto(diaSemana){
   const diasSemana = ['Domingo', 'Segunda-feira', 'Terça-feira','Quarta-feira', 'Quinta-feira',
    'Sexta-feira', 'Sábado'];
    return diasSemana[diaSemana];
}           
function getNomeMes(numeroMes){
    const meses = ['janeiro', 'fevereiro', 'março', 'abril', 'maio', 'junho', 'julho',
     'agosto', 'setembro', 'outubro', 'novembro', 'dezembro'];
    return meses[numeroMes] ;
}
function zeroAEsquerda (num){
    return num>=10 ? num : `0${num}`;
}
function criaData(data){
    const diaSemana = data.getDay();
    const mes = data.getMonth();
    const nomeDia=getDiaSemanaTexto(diaSemana);
    const nomeMes=getNomeMes(mes)
     return (`${nomeDia}, ${data.getDate()} de
     ${nomeMes} de ${data.getFullYear()} 
     ${zeroAEsquerda(data.getHours())} : ${zeroAEsquerda(data.getMinutes())}`
     );
}
h1.innerHTML=criaData(data);    
