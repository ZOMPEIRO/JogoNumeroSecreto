 function verificaChuteValorValido(chute) {
    const numero = +chute

    if(chuteForInvalido(numero)){
       elementoChute.innerHTML += '<div>Valor inválido! </div>'
       return
    }

    if(numeroMaiorOuMenorPermitido(numero)){
        elementoChute.innerHTML +=`<div>O numero precisa estar entre ${menorValor} e ${maiorValor}</div>`
        return

    }

    if( numero === numeroSecreto){
        document.body.innerHTML = `
        <h2>Parabens! Você acertou.</h2>
         <h3> O numero secreto era ${numeroSecreto}.</h3>
           
         <button id ="jogar-novamente" class="btn-jogar">Jogar novamente</button>
         
         `


    } else if (numero > numeroSecreto) {
        elementoChute.innerHTML += `
        <div>O número secreto é menor <i class="fa-solid fa-arrow-down"></i></div>
        `
    } else {
        elementoChute.innerHTML += `
        <div>O número secreto é Maior <i class="fa-solid fa-arrow-up"></i></div>
        `
    }

 }

function chuteForInvalido(numero) {
    return Number.isNaN(numero)
}

function numeroMaiorOuMenorPermitido (numero) {
    return numero > maiorValor || numero < menorValor
}


document.body.addEventListener('click', e => {
    if(e.target.id =='jogar-novamente'){
        window.location.reload();
    }
})

