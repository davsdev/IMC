resultado = document.querySelector('#resultado');
botaoCalcular = document.querySelector('#calculoimc');

function calcularIMC() {
    peso = parseFloat(document.querySelector('#pesoInput').value);
    altura = parseFloat(document.querySelector('#alturaInput').value);
    imc = peso / (altura * altura);

    let classificacao = '';
    if (imc < 18.5) {
        classificacao = 'Abaixo do peso';
    } else if (imc < 24.9) {
        classificacao = 'Peso normal';
    } else if (imc < 29.9) {
        classificacao = 'Sobrepeso';
    } else if (imc < 34.9) {
        classificacao = 'Obesidade Grau I';
    } else if (imc < 39.9) {
        classificacao = 'Obesidade Grau II';
    } else {
        classificacao = 'Obesidade Grau III';
    }
    resultado.textContent = `Seu IMC é ${imc.toFixed(2)} (${classificacao}).`;
}

botaoCalcular.addEventListener('click', calcularIMC);

