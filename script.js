let resposta_opcao = 0;
let resposta_certa = 90;
let respostas = [];
let acertos = 0;


function resposta(elemento) {
    if (resposta_opcao != 0) {
        document.getElementById(resposta_opcao).style.background = '#eadfb4';
    }
    if (resposta_certa != 90) {
        document.getElementById(resposta_certa).style.background = '#eadfb4';
    }
    resposta_opcao = elemento.id;
    if (resposta_opcao.includes(".4") == true) {
        resposta_certa = resposta_opcao;
        if (respostas.includes(resposta_opcao) == false) {
            respostas.push(resposta_opcao);
            acertos += 1
       }
    }
    document.getElementById(resposta_opcao).style.background = '#afeeee';
}

function confirmar() {
    if (resposta_certa == resposta_opcao) {
        document.getElementById(resposta_certa).style.background = '#2CFF05';

    } else if (resposta_opcao != 0) {
        document.getElementById(resposta_opcao).style.background = 'red';
        alert("Você errou, mas está quase lá! Continue tentando.");

    }
    else {
        alert("Selecione uma resposta.");
    }
}

function resultado(elemento) {
    alert ("Você acertou " + acertos + "/" + elemento.id)
}

let dica_t = 5;
let dica_c = 5;

function dica_triangulo(elemento) {
    dica_t -= 1;
    if (dica_t >= 0) {
        switch (elemento.id) {
            case "triangulo_f":
                alert("Tente somar os lados que você já sabe o valor e veja quanto falta para 180.");
                alert("Você tem " + dica_t + " dicas restantes")
                break

            case "triangulo_m":
                alert("A fórmula da área do triângulo é Área = (Base x Altura) dividido por 2");
                alert("Você tem " + dica_t + " dicas restantes")
                break
        }
    } else {
        alert("Você não tem mais dicas disponíveis");
    }
}

function dica_circulo(elemento) {
    dica_c -= 1;
    if (dica_c >= 0) {
        switch (elemento.id) {
            case "circulo_m":
                alert("A fórmula do perímetro do círculo é Perímetro = 2 x π x RAIO");
                alert("Ou Perímetro = 2 x 3 x RAIO");
                alert("Você tem " + dica_c + " dicas restantes")
                break
        }
    } else {
        alert("Você não tem mais dicas disponíveis");
    }
}