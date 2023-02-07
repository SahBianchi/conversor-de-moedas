// Moedas referente ao lado esquerdo (valor a ser convertido)
const txtMoedaLE = document.getElementById('txtMoedaLE')
const moedaInicial = document.getElementById('opcaoMoedaLE')

// Moedas referente ao lado direito (valor convertido)
const txtMoedaLD = document.getElementById('txtMoedaLD')
const moedaFinal = document.getElementById('opcaoMoedaLD')

const valorConvertido = document.getElementById('valorConvertido')

const btnConverter =  document.getElementById('botaoConverter')

const valorMoedas = {
    real:{
        valor: {
            dolar: 0.19,
            euro: 0.18,
            real: 1
        },
        moeda: 'R$'
    },
    euro:{
        valor: {
            dolar: 1.07,
            euro: 1,
            real: 5.53
        },
        moeda: 'EUR'
    },
    dolar:{
        valor: {
            dolar: 1,
            euro: 0.93,
            real: 5.15
        },
        moeda: 'USD'
    },
}

btnConverter.addEventListener('click', (e)=> {
    converter()
    e.preventDefault()
})

function converter(){
    //Pega o valor selecionado nos select
    const tipoMoedaInicial = moedaInicial.value
    const tipoMoedaFinal = moedaFinal.value

    //Pega o valor a ser convertido
    const valorConverter = document.getElementById("valorConverter").value;
    
    //Altera o tipo da moeda no HTML, Ex: EUR, R$ e USD
    txtMoedaLE.textContent = valorMoedas[tipoMoedaInicial].moeda
    txtMoedaLD.textContent = valorMoedas[tipoMoedaFinal].moeda

    //Acessa o valor de conversão baseado nos tipos de moedas passadas nos selects e multiplica pelo valor digitado no input 
    const valorFinal = valorConverter * valorMoedas[tipoMoedaInicial].valor[tipoMoedaFinal]

    //Mostra o valor convertido na tela
    valorConvertido.textContent = valorFinal.toFixed(2)
}

converter()
