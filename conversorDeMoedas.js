const txtMoedaLE = document.getElementById('txtMoedaLE')
const moedaInicial = document.getElementById('opcaoMoedaLE')

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
    const tipoMoedaInicial = moedaInicial.value
    const tipoMoedaFinal = moedaFinal.value

    const valorConverter = document.getElementById("valorConverter").value;

    txtMoedaLE.textContent = valorMoedas[tipoMoedaInicial].moeda
    txtMoedaLD.textContent = valorMoedas[tipoMoedaFinal].moeda

    const valorFinal = valorConverter * valorMoedas[tipoMoedaInicial].valor[tipoMoedaFinal]

    valorConvertido.textContent = valorFinal.toFixed(2)
}

converter()
