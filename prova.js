const exercicios = {
  ex: [
    /*Fáceis*/ 
//Paralelogramo
{ titulo: "Quantos lados o paralelogramo tem?", imagem: "/Efeitos Sonoros/Especial imagem.jpg", resp: ["5", "6", "7", "4"]},

{ titulo: "Qual dessas imagens é um paralelogramo?", imagem: "/Efeitos Sonoros/Especial imagem.jpg", resp: ["Vermelho", "Rosa", "Roxo", "Azul Escuro"]},

{ titulo: "Qual parte da casa é um paralelogramo?", imagem: "/Efeitos Sonoros/Especial imagem.jpg", resp: ["Telhado", "janela", "Porta", "Parede"]},

//Retângulo

{ titulo: "Quantos Lados esse retângulo possui?", imagem: "/Efeitos Sonoros/Especial imagem.jpg", resp: [" 3", "6", "2", "4"]},

{ titulo: "Qual o valor do ângulo que falta?", imagem: "/Efeitos Sonoros/Especial imagem.jpg", resp: [" 80°", "30°", "20°", "90°"]},

{ titulo: "Qual dessas imagens tem um retângulo?", imagem: "/Efeitos Sonoros/Especial imagem.jpg", resp: [" Caixa", "Escalímetro", "Bola de Golfe", "Tv"]},

//Quadrado

{ titulo: "Quantos lados o quadrado possui?", imagem: "/Efeitos Sonoros/Especial imagem.jpg", resp: [" 3", "6", "2", "4"]},

{ titulo: "Qual dessas imagens tem um quadrado?", imagem: "/Efeitos Sonoros/Especial imagem.jpg", resp: [" Bola de Golfe", "Escalímetro", "Banana", "Presente"]},

{ titulo: "Qual o valor do ângulo que falta?", imagem: "/Efeitos Sonoros/Especial imagem.jpg", resp: [" 20°", "30°", "80°", "90°"]},

//Triângulo

{ titulo: "Qual forma geométrica apresenta 3 lados?", imagem: "/Efeitos Sonoros/Especial imagem.jpg", resp: [" Quadrado", "Círculo", "Trapézio", "Triângulo"]},

{ titulo: "Qual valor falta para o resultado ser 180°??", imagem: "/Efeitos Sonoros/Especial imagem.jpg", resp: ["70°", "80°", "20°", "65°"]},

{ titulo: "Qual dessas imagens tem um triângulo?", imagem: "/Efeitos Sonoros/Especial imagem.jpg", resp: ["Esfera", "Quadrado", "Borracha", "Melancia"]}

  ]
}

const registro = [];

for (let ex = 1; ex <= 10; ex++) {
  if (ex <= 5) {
    let aleatorio = Math.floor(Math.random() * 6);
    let loop = true;

    while (loop == true) {
      if (registro.includes(aleatorio) == true) {
        aleatorio = Math.floor(Math.random() * 6);
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
  } else if (ex <= 8) {
    let aleatorio = Math.floor(Math.random() * 6) + 6;
    let loop = true;

    while (loop == true) {
      if (registro.includes(aleatorio) == true) {
        aleatorio = Math.floor(Math.random() * 6) + 6;
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
    document.getElementById(cortada + "confirmar").style.backgroundColor = '#dbd1a7';
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
