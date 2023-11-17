//imput valor em dolar
var valorDolar = parseFloat(prompt("Valor que deseja converter:"));
//cotação do dólar
var valorCotacao = 4.86;

var valorFinal = valorDolar * valorCotacao;
valorFinal = valorFinal.toFixed(2);

alert('Valor em real: R$' +valorFinal);
