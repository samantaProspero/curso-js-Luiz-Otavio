const paragrafos =document.querySelector('.paragrafos');
const ps = paragrafos.querySelectorAll('p');

const estilosBody = getComputedStyle(document.body);
const backgroundColorBody = estilosBody.backgroundColor;
console.log(backgroundColorBody)

for (let p of ps){
    p.style.backgroundColor = 'rgb(13, 106, 134)';
    p.style.color = 'white'
    
    console.log(p);
}

