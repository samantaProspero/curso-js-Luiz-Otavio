let $cpf = '253.001.718-24';
let cpfLimpo= $cpf.replace(/\D+/g, '');
let cpfArray = Array.from(cpfLimpo);
let cpfReduzido = cpfArray.slice(0,-2);

let produto = function produto (array, multiplicador){
    return array.map(function(item, index){
        return item*(multiplicador -index)
        })
};
let digito = function digito (soma){
    if(11-(soma%11)>9){
        return 0;
    }else{
        return 11-(soma%11)
    }
};
let somatorio = function somatorio(arr){
    return arr.reduce(function(acc, atual){return acc+atual},0)
};
let cpfContas = produto(cpfReduzido, 10);
cpfContas = somatorio(cpfContas);
let primDigito= digito(cpfContas);
cpfContas= cpfReduzido.concat(primDigito);
let cpfContas2= produto(cpfContas, 11);
cpfContas2 = somatorio(cpfContas2);
let segDigito= digito(cpfContas2);

if(primDigito===Number(cpfArray[9]) && segDigito===Number(cpfArray[10])){
    console.log('cpf válido');
}else{
   console.log('cpf inválido');
};

