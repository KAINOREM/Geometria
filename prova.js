
const facil = {
  ex: [
    { titulo: "Banana", imagem: "/Efeitos Sonoros/Especial imagem.jpg", resp: ["amarelo", "casca", "carboidratos", "Certo"] },
    { titulo: "BMW", imagem: "/Efeitos Sonoros/Especial imagem.jpg", resp: ["320", "X3", "X5", "Muitos cavalos"] },
    { titulo: "Fiat", imagem: "/Efeitos Sonoros/Especial imagem.jpg", resp: ["500", "Panda", "De algum país", "Carro"] },
    { titulo: "duro", imagem: "/Efeitos Sonoros/Especial imagem.jpg", resp: ["mole", "medio", "molhado", "acertou"] },
    { titulo: "cavalos grandes", imagem: "/Efeitos Sonoros/Especial imagem.jpg", resp: ["boi", "cabra", "lebre", "Agnóstico"] }
  ]
}

const registro_f = [];
const registro_m = [];
const registro_d = [];

for (let ex = 1; ex <= 10; ex++) {
  if (ex <= 5) {
    let aleatorio = Math.floor(Math.random() * 5);
    let loop = true;

    while (loop == true) {
      if (registro_f.includes(aleatorio) == true) {
        aleatorio = Math.floor(Math.random() * 5);
      } else {
        registro_f.push(aleatorio);
        loop = false;
      }
    }

    document.getElementById("ex" + ex).innerHTML = facil.ex[aleatorio].titulo;
    document.getElementById("imagem_ex" + ex).src = facil.ex[aleatorio].imagem;

    for (let num = 1; num <= 4; num++) {
      document.getElementById(ex + "." + num).innerHTML += facil.ex[aleatorio].resp[num - 1];
    }
  } else if (ex <= 8) {

  } else if (ex <= 10) {

  }
}

function resposta(elemento) {
    if (resposta_opcao != 0) {
        document.getElementById(resposta_opcao).style.background = '#eadfb4';
    }
    if (resposta_certa != 90) {
        document.getElementById(resposta_certa).style.background = '#eadfb4';
    }

    resposta_opcao = elemento.id;

    // Verifica se é a resposta correta (.4 no ID)
    if (resposta_opcao.includes(".4") == true) {
        resposta_certa = resposta_opcao;
        if (respostas.includes(resposta_opcao) == false) {
            respostas.push(resposta_opcao);
            acertos += 1;
        }
    }

    document.getElementById(resposta_opcao).style.background = '#afeeee';
}

function confirmar() {
    if (resposta_certa == resposta_opcao) {
        document.getElementById(resposta_certa).style.background = '#2CFF05';
        tituloResposta.textContent = "Parabéns!";
        imagemResposta.src = "/Imagens/parabens_geral.png"
        textoResposta.textContent = "Você é incrivel!";
        modalResposta.style.display = "block";

        let aleatorio = Math.floor((Math.random() * 100) + 1);

        if ((aleatorio >= 1) && (aleatorio <= 33)) {
            sound1.play()
        } else if ((aleatorio > 33) && (aleatorio <= 66)) {
            sound2.play()
        } else if ((aleatorio > 66) && (aleatorio <= 99)) {
            sound3.play()
        } else if (aleatorio == 100) {
            tituloResposta.textContent = "";
            imagemResposta.src = "/Efeitos Sonoros/Especial imagem.jpg"
            textoResposta.textContent = "";
            modalResposta.style.display = "block";
            sound4.play()
        }



    } else if (resposta_opcao != 0) {
        document.getElementById(resposta_opcao).style.background = 'red';

}
}
