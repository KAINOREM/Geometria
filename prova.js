const exercicios = {
  ex: [
    /*Fáceis*/
    { titulo: "Quadrado", imagem: "/Efeitos Sonoros/Especial imagem.jpg", resp: ["amarelo", "casca", "carboidratos", "Certo"]},
    { titulo: "Triangulo", imagem: "/Efeitos Sonoros/Especial imagem.jpg", resp: ["320", "X3", "X5", "Certo"]},
    { titulo: "Fiat", imagem: "/Efeitos Sonoros/Especial imagem.jpg", resp: ["500", "Panda", "De algum país", "Certo"]},
    /*Difíceis*/
    { titulo: "duro", imagem: "/Efeitos Sonoros/Especial imagem.jpg", resp: ["mole", "medio", "molhado", "Certo"] },
    { titulo: "cavalos grandes", imagem: "/Efeitos Sonoros/Especial imagem.jpg", resp: ["boi", "cabra", "lebre", "Certo"] }
  ]
}

const registro = [];

for (let ex = 1; ex <= 10; ex++) {
  if (ex <= 3) {
    let aleatorio = Math.floor(Math.random() * 3);
    let loop = true;

    while (loop == true) {
      if (registro.includes(aleatorio) == true) {
        aleatorio = Math.floor(Math.random() * 3);
      } else {
        registro.push(aleatorio);
        loop = false;
      }
    }

    document.getElementById("ex" + ex).innerHTML = exercicios.ex[aleatorio].titulo;
    document.getElementById("imagem_ex" + ex).src = exercicios.ex[aleatorio].imagem;


    for (let num = 1; num <= 4; num++) {
      document.getElementById(ex + "." + num).innerHTML += exercicios.ex[aleatorio].resp[num - 1];
    }
  } else if (ex <= 5) {
    let aleatorio = Math.floor(Math.random() * 2) + 3;
    let loop = true;

    while (loop == true) {
      if (registro.includes(aleatorio) == true) {
        aleatorio = Math.floor(Math.random() * 2) + 3;
      } else {
        registro.push(aleatorio);
        loop = false;
      }
    }

    document.getElementById("ex" + ex).innerHTML = exercicios.ex[aleatorio].titulo;
    document.getElementById("imagem_ex" + ex).src = exercicios.ex[aleatorio].imagem;

    for (let num = 1; num <= 4; num++) {
      document.getElementById(ex + "." + num).innerHTML += exercicios.ex[aleatorio].resp[num - 1];
    }

  } else if (ex <= 10) {

  }
}

let resposta_opcao = 0;
let respostas = [];
let acertos = 0;

function resposta(elemento) {
  if ((resposta_opcao != 0)) {
    document.getElementById(resposta_opcao).style.background = '#eadfb4';
  }

  resposta_opcao = elemento.id;

  if (respostas.includes(resposta_opcao.slice(0, -1)) == true) {

    resposta_opcao = 0;

  } else {
    document.getElementById(resposta_opcao).style.background = '#afeeee';
  }
}

function confirmar() {
  document.getElementById(resposta_opcao).style.background = '#a1dbdb';
  let cortada = resposta_opcao.slice(0, -1);
  respostas.push(cortada);

  for (let num = 1; num <= 4; num++) {
    if (cortada + num != resposta_opcao) {
    document.getElementById(cortada + num).style.background = '#dbd1a7';
    }
  }

  if (resposta_opcao.includes(".4") == true) {
    acertos += 1;
    exercicios.ex[aleatorio].titulo
  }
  resposta_opcao = 0
}

const modalDica = document.getElementById("modalDica");
const modalResposta = document.getElementById("modalResposta");
const imagemDica = document.getElementById("imagemDica");
const tituloResposta = document.getElementById("tituloResposta");
const textoResposta = document.getElementById("textoResposta");
const closeButtons = document.querySelectorAll(".close");

closeButtons.forEach(button => {
  button.addEventListener('click', function () {
    this.closest('.modal').style.display = 'none';
  });
});

window.addEventListener('click', function (event) {
  if (event.target.classList.contains('modal')) {
    event.target.style.display = 'none';
  }
});

document.addEventListener('keydown', function (event) {
  if (event.key === "Escape") {
    document.querySelectorAll('.modal').forEach(modal => {
      modal.style.display = 'none';
    });
  }
});

function resultado(elemento) {
  alert("Você acertou " + acertos + "/" + elemento.id)
}
