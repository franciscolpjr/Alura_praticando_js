function sortear(){

    let qdade = parseInt(document.getElementById('quantidade').value);
    let de = parseInt(document.getElementById('de').value);
    let ate = parseInt(document.getElementById('ate').value);

    console.log(`Quantidade: ${qdade}`)
    console.log(`de: ${de}`)
    console.log(`ate: ${ate}`)

    let sorteados = [];
    let  numero;

    for(let i=0;i < qdade;i++){
        numero = numeroAleatorio(de,ate);
        if(sorteados.includes(numero,0)){
            i--;        
        }else{
            sorteados.push(numero);
        }
    }
    
    console.log(`Numero aleatório: ${sorteados}`);

    //RESULTADO
    let resultado = document.getElementById('resultado');
    resultado.innerHTML = `<label class="texto__paragrafo">Números sorteados: ${sorteados}</label>`;
    
}

function numeroAleatorio(min,max){
    let aleatorio = Math.random() * (max - min) + min;
    aleatorio = Math.floor(aleatorio);
    return aleatorio;
}