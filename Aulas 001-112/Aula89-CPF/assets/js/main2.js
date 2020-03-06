let $cpf = document.querySelector('[data-js="cpf-digitado"]');
console.log($cpf)
let $result = document.querySelector('[data-js="result"]');
let cpfLimpo= $cpf.replace(/\D+/g, '');
let cpfArray = Array.from(cpfLimpo);

let cpfProduto = cpfArray.slice(0,-2).map(function(item, index){
    return item*(10-index);
})
let cpfSoma = cpfProduto.reduce(function(acc, atual){
    return acc+atual;
},0);

let primDigito;
if(11-(cpfSoma%11)>9){
    primDigito=0;
}else{
    primDigito=11-(cpfSoma%11)
}
if(primDigito!==Number(cpfArray[9])){
    console.log('CPF inválido')
}else{
    console.log('Primeiro dígito ok!')
}
cpfProduto= cpfArray.slice(0,-2).concat(primDigito)
let cpfProduto2=cpfProduto.map(function(item, index){
    return item*(11-index);
})
let cpfSoma2 = cpfProduto2.reduce(function(acc, atual){
    return acc+atual;
},0);

let segDigito;
if(11-(cpfSoma2%11)>9){
    segDigito=0;
}else{
    segDigito=11-(cpfSoma2%11)
}
if(primDigito===Number(cpfArray[9]) && segDigito===Number(cpfArray[10])){
    $result.innerHTML+='cpf válido'
   
    
}else{
   $result.innerHTML+='cpf inválido'
}

