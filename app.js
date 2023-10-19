let name = prompt("Say my Name");
console.log(`Olá ${name}`);
alert(`Olá ${name}`);
let idade = prompt(`Qual tua idade ${name}?`);
if (idade < 18) {
    alert("Vaza Otário");
} else {
    alert("pó passa meu cão sagrado");
}

// let um = prompt("diz um número");
// let dois = prompt("diz um número");
// let valor1 = um;
// let valor2 = dois;
// let resultado = valor1 + valor2;

// console.log(`A soma de ${valor1} e ${valor2} é igual a ${resultado}.`)

// let valor3 = prompt("escolha um número");
// let valor4 = prompt("escolha um número");
// let resultado2 = valor3 + valor4;
// console.log(`A soma de ${valor3} e ${valor4} é igual a ${resultado}.`)

let idol = 890;
let numeroSecreto = parseInt(Math.random () *idol + 1);
console.log(numeroSecreto);
console.log("se errar é burro");
let chute;
let tentativas = 1;

// enquanto chute não for igual ao ns
while (chute != numeroSecreto) {
    chute = prompt(`Escolha um número entre 1 e ${idol}`);
// se chute for igual ao número secreto
    if (numeroSecreto == chute) {
        break
    } else {
        if (chute > numeroSecreto) {
        alert(`errou burro!! o número é menor que ${chute}-_-`); console.log(`esse é o tal do mula`);
        } else {
            alert(`errou burro!! o número é maior que ${chute}-_-`); console.log(`esse é o tal do mula`);
        }
        tentativas++;
    }
}

let palavraTentativa = tentativas > 1 ? "tentativas" : "tentativa";
alert(`Acertô Miseravi! Era ${numeroSecreto} memo com ${tentativas} ${palavraTentativa}`)
console.log(`Maldito ${name}! O miserável é um gênio!`)
//if (tentativas > 1) {
//alert(`Acertô Miseravi! Era ${numeroSecreto} memo com ${tentativas} tentativas`); console.log(`O miserável é um gênio`);
//} else {
//    alert(`Acertô Miseravi! Era ${numeroSecreto} memo com ${tentativas} tentativa`); console.log(`O miserável é um gênio`);
//}