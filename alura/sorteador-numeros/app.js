function sortear(){

    let qdade = parseInt(document.getElementById('quantidade').value);
    let de = parseInt(document.getElementById('de').value);
    let ate = parseInt(document.getElementById('ate').value);

    console.log(`Quantidade: ${qdade}`)
    console.log(`de: ${de}`)
    console.log(`ate: ${ate}`)

    //Proteção de dados inseridos de forma equivocada
    if(de >= ate){
        alert("O valor inicial deve ser menor que o valor final.");
        return;
    }

    if(qdade > (ate - de)){     
        alert("A diferença entre valor inicial e final deve ser maior que a quantidade de números a serem sorteados");
        return;
    }

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
    
    //Habilita BOTAO REINICIAR
    alterarStatusBotao();


}

function numeroAleatorio(min,max){
    let aleatorio = Math.random() * (max - min) + min;
    aleatorio = Math.floor(aleatorio);
    return aleatorio;
}

function alterarStatusBotao(){
    let btnReiniciar = document.getElementById('btn-reiniciar');
    if(btnReiniciar.classList.contains('container__botao-desabilitado')){
        btnReiniciar.classList.remove('container__botao-desabilitado');
        btnReiniciar.classList.add('container__botao');
    }else{
        btnReiniciar.classList.remove('container__botao');
        btnReiniciar.classList.add('container__botao-desabilitado');
    }
}

function reiniciar(){
    document.getElementById('quantidade').value = '';
    document.getElementById('de').value = '';
    document.getElementById('ate').value = '';
    document.getElementById('resultado').innerHTML = '<label class="texto__paragrafo">Números sorteados:  nenhum até agora</label>';
    alterarStatusBotao();
}