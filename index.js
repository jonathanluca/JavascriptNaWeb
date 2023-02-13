// achando os html da minha tela

let botaoMenos = document.getElementById('botao-menor')    // buscando meus documento no html
let botaoMaior = document.getElementById('botao-maior')
let clicar = document.getElementById('clicar') 

botaoMenos.addEventListener('click', subtrair)  // chamando uma funcao 
botaoMaior.addEventListener('click', adicionar)

botaoMaior.innerHTML= '+'       // indo no meu botao 
botaoMenos.innerHTML= '-'
numero.innerHTML = 0 

function adicionar(){
    if(botaoMaior = numero.innerHTML){
        console.log(`${numero.innerHTML++}`)
    } 
}

function subtrair(){
    if(botaoMenos = numero.innerHTML){
        console.log(`${numero.innerHTML--}`);
    }
}










