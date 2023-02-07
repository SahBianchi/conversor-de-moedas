// Moedas referente ao lado esquerdo (valor a ser convertido)
const opcaoRealLE = document.getElementById('moedaRealLE').value
const opcaoEuroLE = document.getElementById('moedaEuroLE').value
const opcaoDolarLE = document.getElementById('moedaDolarLE').value
const txtMoedaLE = document.getElementById('txtMoedaLE')

// Moedas referente ao lado direito (valor convertido)
const opcaoRealLD = document.getElementById('moedaRealLD').value
const opcaoEuroLD = document.getElementById('moedaEuroLD').value
const opcaoDolarLD = document.getElementById('moedaDolarLD').value
const txtMoedaLD = document.getElementById('txtMoedaLD')

const valorConvertido = document.getElementById('valorConvertido')

function converter(){
    const moedaLE = document.getElementById('opcaoMoedaLE');
	const opcaoLE = moedaLE.options[moedaLE.selectedIndex];

    const moedaLD = document.getElementById('opcaoMoedaLD');
	const opcaoLD = moedaLD.options[moedaLD.selectedIndex];

    if(opcaoLE.value == opcaoDolarLE && opcaoLD.value == opcaoRealLD){
        txtMoedaLE.innerHTML = `<p id="txtMoedaLE">USD</p>`
        txtMoedaLD.innerHTML = `<p id="txtMoedaLD">R$</p>`
        const valorConverter = document.getElementById("valorConverter").value;
        const valorDolarEmReal = valorConverter * 5.15
        valorConvertido.innerHTML = `<p class="inputLD" id="valorConvertido">${valorDolarEmReal.toFixed(2)}</p>` 
    }else if(opcaoLE.value == opcaoDolarLE && opcaoLD.value == opcaoEuroLD){
        txtMoedaLE.innerHTML = `<p id="txtMoedaLE">USD</p>`
        txtMoedaLD.innerHTML = `<p id="txtMoedaLD">EUR</p>`
        const valorConverter = document.getElementById("valorConverter").value;
        const valorDolarEmEuro = valorConverter * 0.93
        valorConvertido.innerHTML = `<p class="inputLD" id="valorConvertido">${valorDolarEmEuro.toFixed(2)}</p>` 
    }else if(opcaoLE.value == opcaoDolarLE && opcaoLD.value == opcaoDolarLD){
        txtMoedaLE.innerHTML = `<p id="txtMoedaLE">USD</p>`
        txtMoedaLD.innerHTML = `<p id="txtMoedaLD">USD</p>`
        const valorConverter = document.getElementById("valorConverter").value;
        const valorDolarEmDolar = valorConverter * 1
        valorConvertido.innerHTML = `<p class="inputLD" id="valorConvertido">${valorDolarEmDolar.toFixed(2)}</p>` 
    }else if(opcaoLE.value == opcaoEuroLE && opcaoLD.value == opcaoRealLD){
        txtMoedaLE.innerHTML = `<p id="txtMoedaLE">EUR</p>`
        txtMoedaLD.innerHTML = `<p id="txtMoedaLD">R$</p>`
        const valorConverter = document.getElementById("valorConverter").value;
        const valorEuroEmReal = valorConverter * 5.53
        valorConvertido.innerHTML = `<p class="inputLD" id="valorConvertido">${valorEuroEmReal.toFixed(2)}</p>`
    }else if(opcaoLE.value == opcaoEuroLE && opcaoLD.value == opcaoDolarLD){
        txtMoedaLE.innerHTML = `<p id="txtMoedaLE">EUR</p>`
        txtMoedaLD.innerHTML = `<p id="txtMoedaLD">USD</p>`
        const valorConverter = document.getElementById("valorConverter").value;
        const valorEuroEmDolar = valorConverter * 1.07
        valorConvertido.innerHTML = `<p class="inputLD" id="valorConvertido">${valorEuroEmDolar.toFixed(2)}</p>`
    }else if(opcaoLE.value == opcaoEuroLE && opcaoLD.value == opcaoEuroLD){
        txtMoedaLE.innerHTML = `<p id="txtMoedaLE">EUR</p>`
        txtMoedaLD.innerHTML = `<p id="txtMoedaLD">EUR</p>`
        const valorConverter = document.getElementById("valorConverter").value;
        const valorEuroEmEuro = valorConverter * 1
        valorConvertido.innerHTML = `<p class="inputLD" id="valorConvertido">${valorEuroEmEuro.toFixed(2)}</p>`
    }else if(opcaoLE.value == opcaoRealLE && opcaoLD.value == opcaoDolarLD){
        txtMoedaLE.innerHTML = `<p id="txtMoedaLE">R$</p>`
        txtMoedaLD.innerHTML = `<p id="txtMoedaLD">UDS</p>`
        const valorConverter = document.getElementById("valorConverter").value;
        const valorRealEmDolar = valorConverter * 0.19
        valorConvertido.innerHTML = `<p class="inputLD" id="valorConvertido">${valorRealEmDolar.toFixed(2)}</p>`
    }else if(opcaoLE.value == opcaoRealLE && opcaoLD.value == opcaoEuroLD){
        txtMoedaLE.innerHTML = `<p id="txtMoedaLE">R$</p>`
        txtMoedaLD.innerHTML = `<p id="txtMoedaLD">EUR</p>`
        const valorConverter = document.getElementById("valorConverter").value;
        const valorRealEmEuro = valorConverter * 0.18
        valorConvertido.innerHTML = `<p class="inputLD" id="valorConvertido">${valorRealEmEuro.toFixed(2)}</p>`
    }else if(opcaoLE.value == opcaoRealLE && opcaoLD.value == opcaoRealLD){
        txtMoedaLE.innerHTML = `<p id="txtMoedaLE">R$</p>`
        txtMoedaLD.innerHTML = `<p id="txtMoedaLD">R$</p>`
        const valorConverter = document.getElementById("valorConverter").value;
        const valorRealEmReal = valorConverter * 1
        valorConvertido.innerHTML = `<p class="inputLD" id="valorConvertido">${valorRealEmReal.toFixed(2)}</p>`
    }
}

converter()