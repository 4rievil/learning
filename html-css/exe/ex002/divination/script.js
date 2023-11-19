var numeroSecreto = parseInt(Math.random() * 1001);
let tentativas_max = 16;
let tentativas = 0;

while (tentativas < tentativas_max) {
    var chute = prompt('Digite um número entre 0 e 1000. Você tem ' + (tentativas_max - tentativas) + ' tentativas restantes.');

    if (chute === null) {
        break;
    }

    chute = parseInt(chute);

    if (chute === numeroSecreto) {
        alert('Acertou!');
        break;
    } else if (chute > numeroSecreto) {
        alert('Errou... o número secreto é menor');
    } else if (chute < numeroSecreto) {
        alert('Errou... o número secreto é maior');
    }

    tentativas++;

    if (tentativas === tentativas_max) {
        alert('GAME OVER! Você usou todas as suas tentativas.');
    }
}
