var name = prompt('Digite seu nome para subir à bordo!');
var estrela = prompt('Hey, ' + name + '! Para qual estrela você deseja viajar hoje? \n\nPróxima Centauri \nBetelgeuse \nSírius \nAlpha Centauri Bb');

var distTerraEstrela = {
    'próxima centauri': 4.24,
    'betelgeuse': 643,
    'sirius': 8.6,
    'alpha centauri bb': 4.37
};

//fator de conversão aproximado de anos-luz para quilômetros
var anosLuzToKm = 9.461e12;

//verifica se a estrela é válida
if (estrela in distTerraEstrela) {
    var distAnosLuz = distTerraEstrela[estrela];
    var distQuilometros = distAnosLuz * anosLuzToKm;
    alert('E aí, ' + name + '?! Você escolheu viajar para ' + estrela + '.\nA distância da Terra até ' + estrela + ' é de aproximadamente ' + distQuilometros.toLocaleString() + ' quilômetros.');
} else {
    alert('Desculpe, ' + name + '. Essa estrela não está disponível para viagens intergaláticas no momento! :(')
}