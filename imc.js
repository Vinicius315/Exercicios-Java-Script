

const calcular = document.getElementById('calcular');
const resultado = document.getElementById('resultado'); // Pegue o resultado fora da função para melhor prática

const imc = () => {
    const nome = document.getElementById('nome').value;
    const altura = parseFloat(document.getElementById('altura').value); // Use parseFloat
    const peso = parseFloat(document.getElementById('peso').value);   // Use parseFloat

    if (nome !== '' && !isNaN(altura) && !isNaN(peso) && altura > 0 && peso > 0) { // Validação mais robusta
        const valorImc = (peso / (altura * altura)).toFixed(1);

        let classificacao = "";

        if (valorImc < 18.5) {
            classificacao = 'abaixo do peso.';
        } else if (valorImc < 25) { // Entre 18.5 e 24.9
            classificacao = 'com peso ideal.';
        } else if (valorImc < 30) { // Entre 25 e 29.9 (Sobrepeso)
            classificacao = 'com sobrepeso.';
        } else if (valorImc < 35) { // Entre 30 e 34.9 (Obesidade Grau I)
            classificacao = 'com obesidade grau I.';
        } else if (valorImc < 40) { // Entre 35 e 39.9 (Obesidade Grau II)
            classificacao = 'com obesidade grau II.';
        } else { // 40 ou mais (Obesidade Grau III)
            classificacao = 'com obesidade grau III (mórbida).';
        }

        resultado.textContent = `${nome}, seu IMC é ${valorImc} e você está ${classificacao}`;
    } else {
        resultado.textContent = 'Por favor, preencha todos os campos corretamente (altura e peso devem ser números positivos).';
    }
}

calcular.addEventListener('click', imc); // Adicione o evento de click aqui




















































/*document.getElementById('calcular').addEventListener('click', function () {
    const nome = document.getElementById('nome').value.trim();
    const altura = parseFloat(document.getElementById('altura').value);
    const peso = parseFloat(document.getElementById('peso').value);
    const resultado = document.getElementById('resultado');

    if (!nome || isNaN(altura) || isNaN(peso) || altura <= 0 || peso <= 0) {
        resultado.textContent = 'Por favor, preencha todos os campos com valores válidos.';
        return;
    }

    const imc = peso / (altura * altura);
    let classificacao = '';

    if (imc < 18.5) {
        classificacao = 'abaixo do peso';
    } else if (imc < 25) {
        classificacao = 'com peso ideal';
    } else if (imc < 30) {
        classificacao = 'levemente acima do peso';
    } else if (imc < 35) {
        classificacao = 'com obesidade grau I';
    } else if (imc < 40) {
        classificacao = 'com obesidade grau II';
    } else {
        classificacao = 'com obesidade grau III';
    }

    resultado.textContent = `${nome}, seu IMC é ${imc.toFixed(2)} e você está ${classificacao}.`;
});

*/