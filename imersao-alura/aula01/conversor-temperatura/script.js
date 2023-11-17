var temperatura = prompt("Quantos graus Celsius deseja converter? ");
var tempCelsius = parseFloat(temperatura); //converte a entrada para um número 

var tempFahrenheit = (tempCelsius * 9/5) + 32;
var tempKelvin = tempCelsius + 273.15;

tempKelvin = tempKelvin.toFixed(2);

alert('Olá! ' + tempCelsius + 'C° é igual a ' +tempFahrenheit+ 'F°, e ' + tempKelvin + 'K.');