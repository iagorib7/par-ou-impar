function verificarParOuImpar() {
    var numero = parseInt(document.getElementById('numero').value);
    
    if (isNaN(numero)) {
        document.getElementById('resultado').innerText = 'Por favor, insira um número inteiro válido.';
        return;
    }

    var resultado;
    if (numero % 2 === 0) {
        resultado = `${numero} é um número par.`;
    } else {
        resultado = `${numero} é um número ímpar.`;
    }

    document.getElementById('resultado').innerText = resultado;
}